function squareDigits(num){
  //may the code be with you
  let sqArray = []
  let array = String(num).split("");
  array.forEach(function(d){
    sqArray.push(String(Math.pow(parseInt(d, 10), 2)));
  });
  return parseInt(sqArray.join(""), 10);
}
