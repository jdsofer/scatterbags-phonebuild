var boot=function(game){
	console.log("Starting Scatter Bag...");
};

boot.prototype={

	preload: function(){
		this.game.load.image("background", "assets/background.jpg");
	},

  	create: function(){

  		/*
		this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
		//this.game.scale.setShowAll();

		this.scale.minWidth = 400;
		this.scale.minHeight = 300;
		this.scale.maxWidth = 1600;
		this.scale.maxHeight = 1200;

		//this.scale.minWidth = 400;
		//this.scale.minHeight = 300;
		//this.scale.maxWidth = 1600;
		//this.scale.maxHeight = 1200;

		this.game.scale.refresh();
		this.scale.pageAlignHorizontally=true;
		this.scale.pageAlignVertically=true;
		*/

		var gameWidth = 800;
		var gameHeight = 600;

		/* Scaling code */
		/* http://www.html5gamedevs.com/topic/5949-solution-scaling-for-multiple-devicesresolution-and-screens/ */
		if (this.game.device.desktop)
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = gameWidth/2;
            this.scale.minHeight = gameHeight/2;
            this.scale.maxWidth = gameWidth;
            this.scale.maxHeight = gameHeight;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }
        else
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = gameWidth/2;
            this.scale.minHeight = gameHeight/2;
            this.scale.maxWidth = 2048; //You can change this to gameWidth*2.5 if needed
            this.scale.maxHeight = 1228; //Make sure these values are proportional to the gameWidth and gameHeight
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
        }

		this.game.state.start("Preload");


	}
}