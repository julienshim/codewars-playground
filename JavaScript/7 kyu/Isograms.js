function isIsogram(str){
  //...
  let chars = {}
  str.split("").map(l => l.toLowerCase()).forEach(c => chars[c] = chars[c] ? chars[c] + 1 : 1)
  for (let letter in chars) {
    if (chars[letter] > 1) {
      return false;
    }
  }
  return true;
}
