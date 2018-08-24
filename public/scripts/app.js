$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;

  $("form").on("click", function(){
    // ajax request
    // send the product id and quantity
    // then  show that the item has been added
  });
});

