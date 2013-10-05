function Game() {
	var self = this;
	self.canvas = document.getElementById('canvas');
	

	self.iAmPotato = function(time) {
		self.duration = time || 5000;
		
		$('#canvas h2').css({'display' : 'block'});
		self.timer = setInterval(self.countTime, 1000);
		self.animateBackground();
		self.createPotato();
	};
	self.countTime = function() {
		if (self.duration>1000) {
			self.duration  -= 1000;
			$('#canvas h2').html(self.duration/1000+'s');
		} else {
			clearInterval(self.timer);
			self.youLose();
		}
	};
	self.youLose = function() {
	  $(self.potato).off('click');
		//self.potato.removeEventListener('click');
		self.potato.style.cursor = 'default';
		self.canvas.style.backgroundColor = '#fd411b';
		self.layer.remove();
    $(self.potato).stop();
    self.potato.className = 'dead';
    self.potato.cssText = '-webkit-animation: animateDead 1s steps(3, end) infinite';
    
    
    setTimeout(function(){
      $.ajax({
        url: "status.php",
        data: { "status": 0, "id" : uniqueID },
        type: "POST",
        success: function (data) {
      
        }
      });
	  },1000);
	  
	};
	self.animateBackground = function() {
		var layer = document.createElement('div');
		layer.setAttribute('id', 'layer');
		self.canvas.appendChild(layer);
		self.layer = document.getElementById('layer');
		self.layer.style.webkitAnimationName = 'backgroundAnimation';
		self.layer.style.webkitAnimationDuration = '1s';
		self.layer.style.webkitAnimationIterationCount = 'infinite';


	};
	self.youWin = function(e) {
		clearInterval(self.timer);
		
		 $(self.potato).stop();
  	  self.potato.className = 'success';
		
		  self.canvas.style.backgroundColor = '#57dddf';
  		self.layer.remove();

		  setTimeout(function(){

    		completed();
		  },5000);
		
		e.preventDefault();
	};
	
	self.newPosition = function() {
    var h = Math.floor(Math.random() * ($(window).height() - 606));
    var w = Math.floor(Math.random() * ($(window).width() - 517));

    return [h, w];
  };

  self.animatePotato = function() {
    var position = newPosition();

    $('#potato').animate({ top: position[0], left: position[1] }, function() {
      animatePotato();
    });
  };
	
	self.createPotato = function() {
		var el = document.createElement('div');
		el.setAttribute('id', 'potato');
		self.canvas.appendChild(el);
		self.potato = document.getElementById('potato');
		self.potato.cssText = '-webkit-animation: animate 1s steps(5, end) infinite';
		self.animatePotato();
    $(self.potato).on('click', self.youWin);
		//self.potato.addEventListener('click', self.youWin, false);
	};

}
