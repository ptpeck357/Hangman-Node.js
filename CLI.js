var inquirer = require('inquirer');

//NPM package to check whether or not a character is a letter
var isLetter = require('is-letter');

var letterConstructor = require('./letterConstructor');

var guess;


var newStartgame = new letterConstructor();

var Askuser = function(){ 

	//Grabs the number of guesses from the constructor
	guess = newStartgame.turns;

	if(0 < guess){ 

		//Asks the user for a letter prompt
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

						//Runs the user input through the constructor
						newStartgame.checkLetters(inquirerResponse.guess);

						//Asks the user for another letter
						Askuser();

					if (newStartgame.lettersInWord.toString() === newStartgame.underscore.toString()) {

						console.log("\nYou got it right! Next word!\n");

						newStartgame = new letterConstructor();

					};

  			});

	} else {

		console.log("You loose");

		//asks user if the want to play again
		inquirer.prompt([

			{
			    name: "playagain",
				type: "confirm",
			    message: "Want to play again?"
			}

		]).then(function(response){

			//If the user says yes, runs the game again
			if(response.playagain){


				newStartgame = new letterConstructor();
				
				return Askuser();

			} else {

				console.log("\nThanks for playing!");

			};
		});

	};
};

Askuser();



