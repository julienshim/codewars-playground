function addLetters(...letters) {
  // your code here
  const alphabetKey = {};
  const alphabetKeyRev = {};
  const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('').forEach((letter,index) => {
    alphabetKey[letter] = index+1;
    alphabetKeyRev[index+1] = letter;
  });
  const sum = letters.reduce((a, b) => a + alphabetKey[b], 0);
  if (letters.length === 0 || sum % 26 === 0) {
    return 'z'
  } else {
    return sum > 26 ? alphabetKeyRev[sum % 26]  : alphabetKeyRev[sum]; 
  }
}