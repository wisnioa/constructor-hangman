var inquirer = require("inquirer");
var wordConstructor = require("./word.js");
var letterConstructor = require("./letter.js");
var wordBankFile = require("./wordBank.js");

// console.log(wordBankFile.randomWord);


var remainingGuesses = 10;
var guessedLetters = [];


console.log('Welcome to Drunk Hangman!');



function startGame(){
inquirer.prompt([{
      name: "play",
      type: "confirm",
      message: "Want to play?",
    

  
  }]).then (function(answers){
  if (answers.play === true){
    letsPlay();
  }
else{
  console.log("Suit yourself!");
    }
  })
}
      
  
  
  function letsPlay(){
    wordBankFile.randomWord.showLetter();
    console.log(wordBankFile.randomWord.showLetter());
    inquirer.prompt([{
      type: 'input',
      name: 'letter',
      message: 'Please select a letter.'
        
    }]).then(function (){
      
      if (remainingGuesses === 0){

        console.log("Game over!");
        startGame();
      }
    })
  };

  startGame();
  
        

    

