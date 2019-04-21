function sumOfIntegersInString(s){
  let numArr = s.split(/[\D\s]/gi);
  let sum = 0;
  numArr.forEach(function(n){
    sum += Number(n) && Number(n)
  });
  return sum;
}
