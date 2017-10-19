

var letterFile = require('./letter.js');
var wordBank = require('./wordBank.js');
var words = [];
var guessedLetters = [];


var Word = function(word) {
    this.word = word;

    this.showLetter = function (){
    for (var i = 0; i < randomWord[i].length; i++) {
        if (randomWord[i] === " ") {
            words[i] = " ";
        }
        else {
            words[i] = "_";
        }
    }
}
}
