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

function newPosition() {
  var h = $(window).height() - 606;
  var w = $(window).width() - 517;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
};

function animateXYZ() {
  var position = newPosition();

  $('#potato').animate({ top: position[0], left: position[1] }, function() {
    animateXYZ();   
  });
};

// game play
function play() {
  $('<div id="potato"></div>').appendTo('body');
  
  animateXYZ();

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
        var random = Math.ceil(Math.random() * 5) * 1000;
        
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