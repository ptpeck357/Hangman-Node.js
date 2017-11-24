var wordConstructor = require('./wordConstructor');


var BeginGame = function() {

	//Calls a new instance of the wordconstructor
	var newStartgame = new wordConstructor();

	//
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

 		this.lettersInWord.push("_");

	};

	this.checkLetters = function(userkey){

		//See if the userkey exists in the wrong guesses array
		var letterExist = false;

		for (var i = 0; i < this.wrongGuesses.length; i++) {

			if(userkey === this.wrongGuesses[i]){

				letterExist = true;

			};

		};

		if (letterExist === false) {

			this.flag = false;

			for (var i = 0; i < this.underscore.length; i++) {

				if(this.randomWord[i] === userkey) {

					this.flag = true;

				};
			};

			// If the letter exists somewhere in the word, then figure out exactly where (which indices).
			if (this.flag) {

				for (var i = 0; i < this.underscore.length; i++) {

					// Populate the dashes with every instance of the letter.
					if (this.randomWord[i] === userkey) {

						// Here we set the specific space in blanks and letter equal to the letter when there is a match.
						this.lettersInWord[i] = userkey;

					};
				};

				console.log("\nCorrect!\n")

				console.log(this.lettersInWord.join(" ") + "\n\n");

			} else {

				console.log("\nIncorrect!")

				//add the letter to the list of wrong letters, and we subtract one of the guesses.
				this.wrongGuesses.push(userkey);

				// numGuesses--;
				this.turns--;

				console.log("\nGuesses remaining: " + this.turns + "\n")

				
			};	

		};
	};
};

module.exports = BeginGame;




