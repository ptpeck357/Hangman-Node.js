var StartGame = require('./wordConstructor');

var beginGame = function() {

		var newStartgame = new StartGame();

	  	this.lettersInWord = [];

	  	this.wrongGuesses = [];

	  	this.turns = 9;

		this.randomWord = newStartgame.chosenWord();;

		this.underscore = this.randomWord.split("");

		this.numBlanks = this.underscore.length;

	 	for (var i = 0; i < this.numBlanks; i++) {

	 		this.lettersInWord.push("_");

		};

		console.log((this.lettersInWord).join(" "));


		this.checkLetters = function(userkey){

			this.flag = false;

			this.result = false;

			for (var i = 0; i < this.numBlanks; i++) {

				if(this.randomWord[i] === userkey) {
					this.flag = true;
				};
			};

			// If the letter exists somewhere in the word, then figure out exactly where (which indices).
			if (this.flag) {

			// Loop through the word.
			for (var i = 0; i < this.numBlanks; i++) {

				// Populate the blanksAndSuccesses with every instance of the letter.
				if (this.randomWord[i] === userkey) {
					// Here we set the specific space in blanks and letter equal to the letter when there is a match.
					this.lettersInWord[i] = userkey;
				}
			}
			// Logging for testing.
			console.log(this.lettersInWord.join(" "));
			}

			// If the letter doesn't exist at all...
			else {

				// ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
				this.wrongGuesses.push(userkey);

				// numGuesses--;
				this.turns--;

				console.log("Guesses remaining " + this.turns)
			}	

		}

		if (this.lettersInWord.toString() === this.underscore.toString()) {

			console.log("You win!");

		}
};



// function checkLetters(userkey) {

		

module.exports = beginGame;




