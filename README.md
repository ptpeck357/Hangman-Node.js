# Hangman

## Description

This is a hangman command-line game using constructor functions. There are two constructors that are in their own seperate files. One constructor is used for storing a word bank of random words and includes a function that picks a random word from the word bank. 

The other constructor holds the amount of guesses the user has, an array that has the letters of the word, an array of wrong guesses, holds the random word, and splits the random word into individual letters. This constructor mainly deals with each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 

## Functionality
The command prompt will ask to guess a letter. If the letter exists in the random word, the command prompt will say it was "correct" and then will show the blanks and successes of that word and the letter the user guessed. If the letter was incorrect, the command prompt will say "incorrect" and display the number of guesses remaining. If the user guess the word, it will automatically get another word. If the user runs out of guesses, a prompt will ask the user if they want to play again.


<h2>Technologies Used:</h2>

* JavaScript
* Node
* NPM(Node Packages Manager)
	* inquirer
	* is-letter
	