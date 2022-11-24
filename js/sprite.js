

(function () {
			
	var knight,
        knightImage,
		canvas;					

	function gameLoop () {
	
	  window.requestAnimationFrame(gameLoop);

	  knight.update();
	  knight.render();
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                if (frameIndex < numberOfFrames - 1) {	
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
		
		that.render = function () {
		
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}

    canvas = document.getElementById("knight-canvas");
	knightImage = new Image();	
    knightImage.addEventListener("load", gameLoop);
    knightImage.src = "img/knight-sprite/Run.png";
	
	knight = sprite({
		context: canvas.getContext("2d"),
		width: 490,
		height: 100,
		image: knightImage,
		numberOfFrames: 7,
		ticksPerFrame: 4
	});
	

} ());