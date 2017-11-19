var inquirer = require('inquirer');

var GuessLetter = require('./guessesConstructor');

var guess = 9;

var askUser = function(){

	if(0 < guess){
		inquirer.prompt([
			{
				name: "guess",
				type: "input", 
				message: "Guess a letter!"
			}
		]).then(function(inquirerResponse) {
				var guessFunction = new GuessLetter(inquirerResponse.guess);
				guessFunction.printltr();
  			});

	} else {
		console.log("You loose")
	};
};

askUser();