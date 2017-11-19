var StartGame = function(){
	
	var wordBank = require('./wordBank');

	this.wordInPlay = wordBank[Math.floor(Math.random() * wordBank.length)];

	this.lettersOftheWord = this.wordInPlay.split("");

	this.LettersinArray = function(){

		this.array.push(this.lettersOftheWord);

		console.log(this.array);

	};
};

module.exports = StartGame;




