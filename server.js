"use strict";

require('dotenv').config();

const PORT          = process.env.PORT || 8080;

const ENV           = process.env.ENV || "development";
const express       = require("express");
const bodyParser    = require("body-parser");
const sass          = require("node-sass-middleware");
const app           = express();
const cookieSession = require('cookie-session');

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.use(cookieSession({
  keys: ["Encrypted Cookie"]
}));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
/*----------------------My Routes--------------------*/

//Register page
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  // grabs user name, phone, and pass from whatever user entered
  const {user_name, password, phone} = req.body;
  console.log("body: ", req.body)
  if (user_name && password && phone) {
  // inserts name & phone into client table
    knex('client')
      .insert(
        {name: user_name, phone: phone}
      )
      .returning("*")
      .asCallback(function(err,client) {
        if (err) {
           return console.error('ERROR', err);
        }
        // CHECK WITH MENTOR
        req.session.client_id = client[0].id;
              console.log(req.session.client_id)
              res.redirect("/");
      })
  } else {
    res.send("sorry, please provide all the infor.");
  }
});

//Login page
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  // grabs user name and pass from whatever user entered
  const {user_name, password} = req.body;
  if (user_name  && password) {
   res.redirect("/");
  } else {
    res.send("sorry, please provide all the infor.");
  }
});





//Menu page
app.get("/menu", (req, res) => {
  // selects all columns from products table
  knex('products')
    .select('*')
    .asCallback(function(err,products){
      if (err) return console.error(err);
      let templateVars = {
        products: products,
      }
        res.render("menu", templateVars);
      })
});


app.post("/menu", (req, res) => {

});

//Order page - client view
app.get("/myorder", (req, res) => {
 knex('order_list')
    .select('*')
    .where( {client_id: 1} )
    .returning('*')
    .asCallback(function(err, order_list){
      if (err) return console.error(err);
      let templateVars = {
        order_list: order_list
      }

      console.log("orderlist: ", order_list);

      res.render("client_order", templateVars);
   })
});

app.post("/myorder", (req, res) => {
  let orderlist = req.body.orderlist;
  //inserts orders into orderlist database
  for (let orders of orderlist){
    knex('order_list')
    .insert({ name: orders['fooditem'], price: orders['price'], quantity: orders['quantity'], client_id: 1})
    .returning('*')
    .asCallback(function(err, rows){
      if (err) return console.error(err);
    })
  }
  res.redirect("client_order")
})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
