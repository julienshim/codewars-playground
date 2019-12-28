// First Solution
function findShort(s){
  const wordArray = s.split(" ");
  let lengthArray = [];
  wordArray.forEach(function(word){
    lengthArray.push(word.length);
  });
  return Math.min(...lengthArray);
}

// Second Solution
function findShort(s){
  return Math.min(...s.split(" ").map(x => x.length));
}