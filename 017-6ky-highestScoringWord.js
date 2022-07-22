function high(x) {
  let highScore = 0;// track highscore
  let wordScore = 0;//track score per word
  let iWord;//word used in loops 
  let hiWord;//winning word

  //returns array of words from sentence x. 
  //converting to lowercase just so can be futureproof
  const word = x.toLowerCase().split(" ");
  console.log(word[0]);

  // First Loop, the word
  for (let i = 0; i < word.length; i++) {
    iWord = word[i];
    console.log(`in 1st loop, word is ${iWord}`)
    wordScore = 0;//resets the score when next word starts loop
    
    //Second Loop, the characters inside the word, making the word score
    for (let x = 0; x < iWord.length; x++) {
      console.log("in 2nd for")

      // for charCodeAt(index), see "https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin_script"
      wordScore = wordScore + (iWord.charCodeAt(x)- 96);

      console.log(`letter x is ${iWord[x]}, points ${wordScore}`)
    }
    
    //Runs always when Second Loop is done before starting First Loop again with next word
    if (wordScore > highScore){
      highScore = wordScore;
      hiWord = word[i];//
      //"If two words score the same, return the word that appears earliest in the original string."
      //The first highest highScore/hiWord will always stay because the if condition 
      // is ">" and not ">="
    }
    //Goes back to First Loop, next word
  }

  console.log(
    `High Score: ${highScore}, 
    Word Score: ${wordScore},
    hiWord: ${hiWord}`)
    return hiWord;
}

high("aaa ba c");