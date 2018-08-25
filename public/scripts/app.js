$(() => {
  /*$.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;*/

  $("form").on("click", function(){
    // ajax request
    // send the product id and quantity
    // then  show that the item has been added
  });

  $("button").on("click", function(event){
    console.log("this is event", event);
    let name = $(this).parent(".card-body").data("name");
    console.log(name);
    let quantity = $(this).siblings(".form-control").val();
    console.log(quantity);
    let price = $(this).parent(".card-body").data("price")
    console.log(price);
    let $ul = $("<ul>");//.addClass("list-group list-group-flush");
    let $nameli = $("<li>").data("name", name).text(name); //.addClass("list-group-item")
    let $priceli = $("<li>").data("price", price).text(price); //.addClass("list-group-item")
    let $quantityli = $("<li>").data("quantity", quantity).text(quantity); //.addClass("list-group-item")

    if (quantity !== "0"){
      $ul.append($nameli);
      $ul.append($priceli);
      $ul.append($quantityli);
      $("#orderList_container").append($ul);
    }

  })
});

