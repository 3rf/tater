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
function play() {
  console.log('playing');

  $('<div id="potato"></div>').appendTo('body');
  
  // game logic, click with timer

  // success message
  // failure message

  completed();
};

var infiniteRequest = function(uniqueID) {
  $.ajax({
    url: "get_potato.php",
    success: function(data) {
      if (data === uniqueID) {
        play();
      } else {
        var random = Math.ceil(Math.random() * 10) * 1000;
        
        setTimeout(function() {
          infiniteRequest(uniqueID);
        }, random);
      }
    }
  });
};

(function() {
  var uniqueID = "id" + (new Date()).getTime();

  $.ajax({
    url: "add_user.php",
    data: { "id": uniqueID },
    type: "POST",
    success: function (data) {
      console.log(data);
    }
  });

  infiniteRequest(uniqueID);
})();