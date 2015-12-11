var gameMenu=function(game){}

gameMenu.prototype={

	create: function(){

		var w = window.innerWidth * window.devicePixelRatio;
		var h = window.innerHeight * window.devicePixelRatio;

		this.game.add.image(this.game.world.centerX, this.game.world.centerY, "background").anchor.set(0.5, 0.5);
		
		//var titleText=this.game.add.text(400, 30, "Scatter Bag", {font: "35px Arial", fill: "#000000", align: "center"});
		//titleText.anchor.setTo(0.5, 0.5);

		//var playButton=this.game.add.button(400, 100, "play", this.launchTheGame, this);
		//playButton.anchor.setTo(0.5, 0.5);
		//var highScoresButton=this.game.add.button(400, 200, "highScores", this.launchHighScores, this);
		//highScoresButton.anchor.setTo(0.5,0.5);

		var titleText=this.game.add.text(400, 30, "Scatter Bag", {font: "35px Arial", fill: "#000000", align: "center"}).anchor.setTo(0.5, 0.5);
		var playButton=this.game.add.button(400, 100, "play", this.launchTheGame, this).anchor.setTo(0.5, 0.5);
		var highScoresButton=this.game.add.button(400, 200, "highScores", this.launchHighScores, this).anchor.setTo(0.5,0.5);

	},
	launchTheGame: function(){
		this.game.state.start("TheGame");
	},
	launchHighScores: function(){
		this.game.state.start("HighScores");
	}
}