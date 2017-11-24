var inquirer = require('inquirer');

var isLetter = require('is-letter');

var letterConstructor = require('./letterConstructor');

var guess;


function beginGame(){

var newStartgame = new letterConstructor();

	var Askuser = function(){ 

		guess = newStartgame.turns;

		if(0 < guess){ 

			inquirer.prompt([ 

				{
					name: "guess",
					type: "input", 
					message: "Guess a letter!",

					//Checks if the user's input is a valid character
					validate: function(event) {
				          if (event) {
				            return isLetter(event);
				          }
				          return false;
				        }
				}

			]).then(function(inquirerResponse) {

							newStartgame.checkLetters(inquirerResponse.guess);

							Askuser();

						if (newStartgame.lettersInWord.toString() === newStartgame.underscore.toString()) {

							console.log("\nYou got it right! Next word!\n");

							newStartgame = new letterConstructor();

						};

	  			});

		} else {

			console.log("You loose");

			inquirer.prompt([

				{
				    name: "playagain",
					type: "confirm",
				    message: "Want to play again?"
				}

			]).then(function(response){

				if(response.playagain){

					newStartgame = new letterConstructor();
										
				};
			});

		};
	};

Askuser();

};

beginGame();

