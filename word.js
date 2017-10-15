

//Randomizing words from word bank
var letterFile = require('./letter.js');
var wordBank = ["margarita", "beer", "hurricane", "screwdriver", "martini", "wine"];

var randomWord = Math.floor(Math.random() * wordBank.length);

var newWord = wordBank[randomWord];




module.exports = newWord; 