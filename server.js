"use strict";

require('dotenv').config();

const PORT          = process.env.PORT || 8080;
const ENV           = process.env.ENV || "development";
const express       = require("express");
const bodyParser    = require("body-parser");
const sass          = require("node-sass-middleware");
const app           = express();

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
app.use(express.static("public"));


/*--------------------- functions -----------------------*/


/*----------------------Fake Database--------------------*/

/*const client = [
  {
    id: 1,
    name: "client1",
    phone: "647-000-0000"
  },
  {
    id: 2,
    name: "client2",
    phone: "647-111-111"
  }
]

const products = [
  {
    id: 1,
    name: "Coke",
    description: "Refreshingly cold!",
    quantity: 0,
    item_price: 3,
    categories_id: 3
  },
  {
    id: 2,
    name: "Big Mister",
    description: "The signature burger of MrDonald",
    quantity: 0,
    item_price: 7,
    categories_id: 1
  },
  {
    id: 3,
    name: "Boring Fries",
    description: "Crispy, fried potato strips",
    quantity: 0,
    item_price: 5,
    categories_id: 2
  }
];

const categories = [
  {
    id: 1,
    name: "main"
  },
  {
    id: 2,
    name: "side"
  },
  {
    id: 3,
    name: "drink"
  }
]

const orderList = [
  {
    id: 1,
    productID: 1,
    userID: 1
  },
  {
    id: 2,
    productID: 2,
    userID: 2
  }
];*/
// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

/*----------------------My Routes--------------------*/

// Home page
app.get("/", (req, res) => {
  res.render("index");
});


//Menu page
app.get("/menu", (req, res) => {
  knex('products')
    .select('*')
    .asCallback(function(err,products){
      if (err) return console.error(err);

      knex.destroy();
      knex('order_list')
        .select("*")
        .where({users_id: 1})
        .asCallback(function(err, order_list) {
          let templateVars = {
            products: products,
            order_list:order_list,
          }
          console.log("menu product & orderlist", templateVars);
          res.render("menu", templateVars);
        })

    })
});

app.post("/menu", (req, res) => {

});

//Login page
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const {user_name, password} = req.body;
  if (user_name  && password) {
      res.redirect("/");
  } else {
    res.send("sorry, please provide all the infor.");
  }
});


//Register page
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const {user_name, password, phone} = req.body;
  if (user_name && password && phone) {
    console.log(client);
    client.client1 = {
      id: "user1",
      name: user_name,
      phone: phone
    };
    console.log(client);
    res.redirect("/");
  } else {
    res.send("sorry, please provide all the infor.");
  }
});

app.post("/add/:productID", (req, res) => {
  //add item into order db;

  //redirect to "/menu"
  res.redirect("/menu");
})

//Order page - client view
app.get("/myorder", (req, res) => {
  res.render("myorder");
});
//Order page - restaurant view
app.get("/clientorder", (req, res) => {
  res.render("clientorder");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
