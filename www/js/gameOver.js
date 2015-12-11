var gameOver=function(game){}

gameOver.prototype={

	init: function(score){

		this.score = score;
	},

	create: function(){

		this.game.add.image(this.game.world.centerX, this.game.world.centerY, "background").anchor.set(0.5, 0.5);
		
  		var gameOverText=this.game.add.text(400, 200, "Game Over", {font: "35px Arial", fill: "#000000", align: "center"}).anchor.setTo(0.5, 0.5);
		var scoreText=this.game.add.text(400, 250, "Score: "+this.score, {font: "25px Arial", fill: "#000000", align: "center"}).anchor.setTo(0.5, 0.5);
		var playAgainButton=this.game.add.button(400, 320, "playAgain", this.launchTheGame).anchor.setTo(0.5,0.5);
		var gameMenuButton=this.game.add.button(400, 420, "gameMenu", this.launchGameMenu).anchor.setTo(0.5,0.5);

		var person = prompt("Enter your name!");

		var postData = {"name": person, "score": this.score};

		if (person != null) {
			$.ajax({
				type: "POST",
				async: false,
				crossDomain: true,
				url: "http://52.33.222.116/scatterbags/post.php",
				data: {"myData" : postData}
			});
		}

	},

	launchTheGame: function(){
		this.game.state.start("TheGame");

	},

	launchGameMenu: function(){
		this.game.state.start("GameMenu");
	}
}