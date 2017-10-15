var inquirer = require("inquirer");

var wordConstructor = require("./word.js");
var letterConstructor = require("./letter.js");

var maxGuesses = 10;



console.log('Welcome to Drunk Hangman!');


inquirer.prompt([{
      name: "play",
      type: "confirm",
      message: "Want to play?"
    }]).then(function(answer) {
      if(answer.play === "y" || "Y"){
        letsPlay();
      } else{
        console.log("Fine, be boring!");
      }
    })

      function letsPlay(){
            inquirer.prompt([{
            name: 'letter',
            type: 'text',
            message: 'Try a letter:',

}]).then(function(){
  //if statement --> checking letter if it's in the up word

// if (letter ===)

// else ---> console.log("Wrong letter! Try again!")

			letsPlay();//Recursive call--triggers next word, game going forward
 				}
  
 );

}
letsPlay();