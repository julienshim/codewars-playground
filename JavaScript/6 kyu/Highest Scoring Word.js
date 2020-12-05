function high(x){
  const letterValueTable = {};
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for(let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    const letterValue = i+1;
    letterValueTable[letter] = letterValue;
  }
  const wordArr = x.split(" ").map(word => {
    const wordObj = {
      word,
      value: 0
    };
    for(let i = 0; i < word.length; i++) {
      const letter = word[i]
      wordObj.value = wordObj.value += letterValueTable[letter]; 
    }
    return wordObj;
  })
 return wordArr.sort((a,b) => b.value - a.value)[0].word;
}
