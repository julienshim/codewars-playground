function nthChar(words){
  let substring = "";
  for (let i = 0; i < words.length; i++) {
    substring += words[i][i]
  }
  return substring;
 }