var StartGame = function(){
	
	//List of random word
	this.wordBank = ["backwords", "online", "radio", "sold", "cruise", "wanted","unforgettable", "stay", "vacation", "beaching", "summertime",
	"alright", "castaway", "toes", "roots", "lit", "today", "smooth", "up", "yeah", "avengers", "batman", "brave heart", "the flash", "friends",
	"gladiator", "green arrow", "groundhog day", "john wick", "lost", "minions", "napoleon dynamite", "criminal minds", "the office", "parks and recreation",
	"red dawn", "rush hour", "star strek", "star wars", "supernatural", "the walking dead"];

	//function that chooses random word
	this.chosenWord = function(){

		return this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
		
	};
};

module.exports = StartGame;



	
