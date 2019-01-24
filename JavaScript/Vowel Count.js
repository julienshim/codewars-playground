function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  for(let i = 0; i < str.length; i++){
    str[i].match(/[aeiou]/) && vowelsCount++;
  }
  return vowelsCount;
}
