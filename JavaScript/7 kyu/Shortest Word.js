function findShort(s){
  const wordArray = s.split(" ");
  let lengthArray = [];
  wordArray.forEach(function(word){
    lengthArray.push(word.length);
  });
  return Math.min(...lengthArray);
}
