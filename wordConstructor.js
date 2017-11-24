var letterConstructor = require('./letterConstructor');


var StartGame = function(){
	
	//List of random word
	this.wordBank = ["backwords", "online", "radio", "sold", "cruise", "wanted",
	"unforgettable", "stay", "vacation", "beaching", "summertime", "alright", "castaway", "toes", "roots",
	"lit", "today", "smooth", "up", "yeah"];

	//function that chooses word
	this.chosenWord = function(){

		return this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
		
	};
};

module.exports = StartGame;



	
