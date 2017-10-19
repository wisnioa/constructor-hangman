var inquirer = require("inquirer");
var wordConstructor = require("./word.js");
var letterConstructor = require("./letter.js");
var wordBankfile = require("./wordBank.js");

// console.log(wordBankFile.randomWord);

var maxGuesses = 10;
var remainingGuesses = 10;
var guessedLetters = [];


console.log('Welcome to Drunk Hangman!');




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
});
      
  
  
  function letsPlay(){
    console.log(wordBankFile.randomWord.showLetter());
    inquirer.prompt([{
      type: 'input',
      name: 'letter',
      message: 'Please select a letter.'
        
    }]).then(function (){





    })
  }
        

    
//   function endGame (){
// if (maxGuesses === 0){
// prompt();

// if (prompt.confirm === true){


// }
// }


// 
