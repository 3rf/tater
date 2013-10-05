function completed() {
  // $.ajax({
  //   url: "service.php",
  //   data: // status (win or lose)
  //   type: "POST",
  //   success: function (data) {
  //     console.log("post");
  //   }
  // });
};

// game play
function callMe() {
  console.log("hello");
  
  // game logic, click with timer
  
  // success message
  // failure message
  
  completed();
};

var infiniteRequest = function() {
  $.ajax({
    url: "get_potato.php",
    success: function(data) {
      var random = Math.ceil(Math.random() * 10) * 1000;

      if (data) {
        callMe();
      } else {
        setTimeout(function() {
          infiniteRequest();
        }, random);
      }
    }
  });
};

(function(){
  var uniqueID = "id" + (new Date()).getTime();

  $.ajax({
    url: "add_user.php",
    data: { "id": uniqueID },
    type: "POST",
    success: function (data) {
      console.log(data);
    }
  });

  infiniteRequest();
})();