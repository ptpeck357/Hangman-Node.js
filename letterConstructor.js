var wordConstructor = require('./wordConstructor');

var BeginGame = function() {

		var newStartgame = new wordConstructor();

	  	this.lettersInWord = [];

	  	this.wrongGuesses = [];

	  	this.turns = 9;

		this.randomWord = newStartgame.chosenWord();

		this.underscore = this.randomWord.split("");

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

					// Loop through the word.
					for (var i = 0; i < this.underscore.length; i++) {

						// Populate the blanksAndSuccesses with every instance of the letter.
						if (this.randomWord[i] === userkey) {

							// Here we set the specific space in blanks and letter equal to the letter when there is a match.
							this.lettersInWord[i] = userkey;

						};
					};

					console.log("Correct!\n")

					console.log(this.lettersInWord.join(" "));

				} else {

					console.log("Incorrect!\n")
					// ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
					this.wrongGuesses.push(userkey);

					// numGuesses--;
					this.turns--;

					console.log("Guesses remaining: " + this.turns)

					
				};	

			};
		};
};

module.exports = BeginGame;




