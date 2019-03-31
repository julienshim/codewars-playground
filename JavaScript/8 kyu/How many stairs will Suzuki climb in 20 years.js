function stairsIn20(s){
  //your code here
  let total = 0;
  s.forEach(function(day){
    total += day.reduce((acc, sum) => acc + sum) * 20;
  });
  return total;
}
