   
   
    var wordBank = ["margarita", "beer", "hurricane", "screwdriver", "martini", "wine"];
    var randomArray = Math.floor(Math.random() * wordBank.length);
    var randomWord = wordBank[randomArray]
    exports.randomWord = randomWord;
  