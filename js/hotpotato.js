function Game() {
	var self = this;
	self.canvas = document.getElementById('canvas');
	
	self.init = function() {
		//self.createBackground();
		//self.iAmPotato();
	};

	self.iAmPotato = function(time) {
		self.duration = time || 5000;
		
		self.timer = setInterval(self.countTime, 100);
		self.animateBackground();
		self.createPotato();
	};
	self.countTime = function() {
		if (self.duration>100) {
			self.duration  -= 100;
			
		} else {
			clearInterval(self.timer);
			self.youLose();
		}
	};
	self.youLose = function() {
		self.potato.removeEventListener('click');
		self.canvas.style.backgroundColor = '#fd411b';
    self.layer.remove();
	  $(self.potato).stop();
	  self.potato.className = 'dead';
	  self.potato.cssText = '-webkit-animation: animateDead 1s steps(3, end) infinite';
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
		  },1000);
    

		
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

		self.potato.addEventListener('click', self.youWin, false);
	};

}
