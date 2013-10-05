var uniqueID;

function completed() {
  $('#potato').remove();

  $.ajax({
    url: "status.php",
    data: { "status": 0, "id" : uniqueID },
    type: "POST",
    success: function (data) {
      infiniteRequest(uniqueID);
    }
  });
};

function newPosition() {
  var h = Math.floor(Math.random() * ($(window).height() - 606));
  var w = Math.floor(Math.random() * ($(window).width() - 517));

  return [h, w];
};

function animatePotato() {
  var position = newPosition();

  $('#potato').animate({ top: position[0], left: position[1] }, function() {
    animatePotato();
  });
};

function play() {
  $('<div id="potato"></div>').appendTo('body');
  
  $('#potato').click(function() {
    completed();
  });

  animatePotato();
  
  // setTimeout(function() {
  //   $('#potato').stop();
  //   $('#potato').fadeOut();
  // 
  //   completed();
  // }, 5000);
};

var infiniteRequest = function(uniqueID) {
  $.ajax({
    url: "get_potato.php",
    success: function(data) {
      if (data === uniqueID) {
        $.ajax({
          url: "status.php",
          data: { "status": 1 },
          type: "POST",
          success: function (data) {
            }
        });

        game.iAmPotato(1000);
      } else {
        var random = Math.ceil(Math.random() * 5) * 1000;
        
        setTimeout(function() {
          infiniteRequest(uniqueID);
        }, random);
      }
    }
  });
};
var game;

(function() {
  uniqueID = "id" + (new Date()).getTime();

  $.ajax({
    url: "add_user.php",
    data: { "id": uniqueID },
    type: "POST",
    success: function (data) {
    }
  });

  infiniteRequest(uniqueID);
  
  game = new Game();
})();