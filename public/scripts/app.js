
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
    let $nameli = $("<div>").data("name", name).text(`- ${name}`); //.addClass("list-group-item")
    let $priceli = $("<div>").data("price", price).text(`$ ${price}`); //.addClass("list-group-item")
    let $quantityli = $("<div>").data("quantity", quantity).text(`Amount: ${quantity}`); //.addClass("list-group-item")
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

$("#order").on("click", function(event){
  $.ajax('/placeorder', {
    type: "POST"
  })
  .then((response)=>{});
   console.log('clicked')
});

$("#updatetime").on("click", function(event){
  let content = $("textarea").val();
  $.ajax('/owner/update', {
    type: "POST",
    data: {text: content}
  })
  .then((response)=>{});
});

$("#completeorder").on("click", function(event){
  $.ajax('/owner/complete', {
    type: "POST"
  })
  .then((response)=>{});

  let $completed = $("<input>").addClass("btn btn-success").val("This order Completed!");
  $("#disappear").empty().append($completed);
});

$("#order").on("click", function(event){
  $("#order-success").text("Order successed! Please check your text messages. MrDonald's will update the approx. finish time!").slideDown();
})

$("#btn1").on("click", function(){
  $('#show1').slideToggle();
})

$("#btn2").on("click", function(){
  $('#show2').slideToggle();
})

$("#btn3").on("click", function(){
  $('#show3').slideToggle();
})

$("#btn4").on("click", function(){
  $('#show4').slideToggle();
})

$("#btn5").on("click", function(){
  $('#show5').slideToggle();
})
});
