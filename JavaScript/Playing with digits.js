function digPow(n, p){
  // ...
  let sum = 0;
  let array = String(n).split("");
  array.forEach(function(d){
    sum += Math.pow(parseInt(d), p)
    p++;
  });
  return Number.isInteger(sum / n) ? sum / n : -1;
}
