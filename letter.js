
var wordBankFile = require("./wordBank.js");
var letterFile = require('./word.js');

// console.log(wordBankFile.randomWord);
var guessedLetters = [];


var Letter = function(letter){
    
    this.letter= letter;

    this.toLowerCase = function(letter) {
       this.letter = guessedLetters.toLowerCase();
        return this.letter;
      }
    
    

    this.findLetters = function (letter){
       
    for (i = 0; i < wordBankFile.randomWord.length, i++;) {   
    if (guessedLetters == wordBankFile.randomWord[i]) {
        console.log("letter found! ", guessedLetters);
        words[i] = wordBankFile.randomWord[i]
                }
            }
        }

    
    this.lettersGuessed = function (letter){
    if (guessedLetters === wordBankFile.randomWord[i]){
    showLetter();
    
    }else {
        console.log("Wrong letter!");
        remainingGuesses --;
            }
    
        } 
    
    }


    


