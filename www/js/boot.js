var boot=function(game){

	console.log("Starting Scatter Bag...");

};

boot.prototype={

	preload: function(){
		this.game.load.image("background", "assets/background.jpg");
	},

  	create: function(){

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
            this.scale.maxWidth = gameWidth*2.5; //2048
            this.scale.maxHeight = gameHeight*2.5; //1228
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
        }

		this.game.state.start("Preload");

	}
}