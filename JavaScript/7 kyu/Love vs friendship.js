function wordsToMarks(string){
  //your code here
  const alphabetKey = {};
  const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('').forEach((letter,index) => {
    alphabetKey[letter] = index+1;
  });
  return string.split("").reduce((totalVal, letter) => {
    const letterVal = alphabetKey[letter]
    return totalVal + letterVal
  }, 0);
}
