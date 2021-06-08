function i(word) {
  //.. 
  if (!word) {
    return 'Invalid word'
  }
  
  function countVowels (str) {
    const vowels = str.match(/[aeiou]/gi) || [];
    return vowels.length;
  }
  
  const vowelCount = countVowels(word);
  const tooManyVowels = vowelCount >= word.length - vowelCount;
  const startsWithAnI = word[0].toLowerCase() === 'i';
  const startsWithLowerCase = word[0] === word[0].toLowerCase();
  
  if (tooManyVowels || startsWithAnI || startsWithLowerCase) {
      return 'Invalid word';
  }
  
  return `i${word}`
}
