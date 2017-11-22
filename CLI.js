var inquirer = require('inquirer');

var beginGame = require('./letterConstructor');

var newStartgame = new beginGame();

var guess = 9;

function generateWord(){

	newStartgame = new beginGame();

}

var askUser = function(){ 

	if(0 < guess){ 

		inquirer.prompt([ 

			{
				name: "guess",
				type: "input", 
				message: "Guess a letter!"
			}

		]).then(function(inquirerResponse) {

				newStartgame.checkLetters(inquirerResponse.guess);

				askUser();

  			});

	} else {

		console.log("You loose");

	};
};

generateWord();

askUser();

