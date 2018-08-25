const accountSid = "AC9c6706b81f2da925a0c98f0ee504e524";
const authToken = "31e5792d30b75b3bbc8f7fe47ada19a6";

const client = require("twilio")(accountSid, authToken);

$(() => {
  /*$.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;*/

  //$("form").on("click", function(){
    // ajax request
    // send the product id and quantity
    // then  show that the item has been added
  //});

  const orderlist = [];
  $(".add").on("click", function(event){
    event.preventDefault(event);
    let name = $(this).parent(".card-body").data("name");
    let quantity = $(this).siblings(".form-control").val();
    let price = $(this).parent(".card-body").data("price")
        price = price * quantity
    let $ul = $("<ul>");//.addClass("list-group list-group-flush");
    let $nameli = $("<li>").data("name", name).text(name); //.addClass("list-group-item")
    let $priceli = $("<li>").data("price", price).text(price); //.addClass("list-group-item")
    let $quantityli = $("<li>").data("quantity", quantity).text(quantity); //.addClass("list-group-item")
    if (quantity){
      $ul.append($nameli);
      $ul.append($priceli);
      $ul.append($quantityli);
      $("#orderList_container").append($ul);
      orderlist.push({
        fooditem: name,
        quantity: quantity,
        price: price
      })
    }
    console.log(orderlist)
    console.log(price);


    const totalPrice = function (orderlist){
      let itemPrice = 0;
      for (let order of orderlist){
        itemPrice += order.price;
      }
      return itemPrice;
    }
    console.log(totalPrice(orderlist));

    $("#total_price").text("Total Price: $ " + totalPrice(orderlist));

  });


$("#placeOrder").on("click", function(event){
 $.ajax('/myorder', {
    type: "POST",
    data: {orderlist}
  })
  .then((response)=>{});
});

$("order").on("click", function(event){
   event.preventDefault(event);
   client.messages
    .create({
      to: "+16478362725",
      from: "+16476914595",
      body: `You have a new order! Check your order page!`
    })
    .then(message => console.log(message));
});

});
