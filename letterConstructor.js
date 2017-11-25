var wordConstructor = require('./wordConstructor');


var BeginGame = function() {

	//Calls a new instance of the wordconstructor
	var newStartgame = new wordConstructor();

	//Holds the dashes for the length of the random word
  	this.lettersInWord = [];

  	//Array to hold the letters already guessed
  	this.wrongGuesses = [];

  	//Amount of guesses the user has
  	this.turns = 9;

  	//Grabs random word from word constructor
	this.randomWord = newStartgame.chosenWord();

	//Splits the random word into individual letters
	this.underscore = this.randomWord.split("");

	//Loops through the array of the random word and prints dashes for the length of the word
 	for (var i = 0; i < this.underscore.length; i++) {

 		if(this.underscore[i] === " "){

 			this.lettersInWord[i] = " ";

 		} else {

 			this.lettersInWord.push("_");

 		};

	};

	//Function that compares the user input to the actual word
	this.checkLetters = function(userkey){

		//See if the userkey exists in the wrong guesses array
		var letterExist = false;

		for (var i = 0; i < this.wrongGuesses.length; i++) {

			if(userkey === this.wrongGuesses[i]){

				letterExist = true;

			};

		};

		//If the letter hadn't already guess that letter, then run this code
		if (!letterExist) {

			this.flag = false;

			for (var i = 0; i < this.underscore.length; i++) {

				if(this.underscore[i] === userkey) {

					this.flag = true;

				};
			};

			// If the letter exists somewhere in the word, then figure out exactly where.
			if (this.flag) {

				for (var i = 0; i < this.underscore.length; i++) {

					// If the first letter equals the user's input, make it capitalized
					if (this.underscore[i] === userkey) {

						this.lettersInWord[i] = userkey;

					};
				};

				console.log("\nCorrect!\n");

				console.log(this.lettersInWord.join(" ") + "\n\n");

			} else {

				console.log("\nIncorrect!");

				//Add the letter to the list of wrong letters, and we subtract one of the guesses.
				this.wrongGuesses.push(userkey);

				//Number of turns decreases;
				this.turns--;

				console.log("\nGuesses remaining: " + this.turns + "\n");

				
			};	

		};
	};
};

module.exports = BeginGame;




