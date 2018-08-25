const accountSid = "AC9c6706b81f2da925a0c98f0ee504e524";
const authToken = "31e5792d30b75b3bbc8f7fe47ada19a6";

const client = require("twilio")(accountSid, authToken);

//test
client.messages
  .create({
    to: "+16478362725",
    from: "+16476914595",
    body: "Testing twilio"
  })
  .then(message => console.log(message));

// ---------------SEND TO RESTAURANT----------------
// Tells restaurant that they have received a new order

client.messages
  .create({
    to: "+16478362725",
    from: "+16476914595",
    body: `You have a new order! Check your order page!`
  })
  .then(message => console.log(message));

//----------------SEND TO CLIENT----------------------
// Sends to client that order is placed
const messageCustomer = time => {
  const message = `Hello, your order will be ready in ${time}!`;
  client.messages
    .create({
      to: "+16478362725",
      from: "+16476914595",
      body: `Your order has been placed!`
    })
    .then(message => console.log(message));
};

// time = req.body from restaurant order page
const messageCustomer = time => {
  const message = `Hello, your order will be ready in ${time}!`;
  client.messages
    .create({
      to: "+16478362725",
      from: "+16476914595",
      body: `Your food will be ready in ${time} minutes!`
    })
    .then(message => console.log(message));
};

// Sends to client that order is complete

const messageCustomer = time => {
  const message = `Hello, your order will be ready in ${time}!`;
  client.messages
    .create({
      to: "+16478362725",
      from: "+16476914595",
      body: `Your food is complete! Come by!`
    })
    .then(message => console.log(message));
};

const messageCustomer = time => {
  const message = `Hello, your order will be ready in ${time}!`;

  client.messages.create(
    {
      to: "+16478362725",
      from: "+16476914595",
      body: message
    },
    err => {
      if (err) {
        return null;
      }
    }
  );
};

module.exports = {
  message: messageCustomer,
  complete: messageComplete,
  call: callRestaurant
};
