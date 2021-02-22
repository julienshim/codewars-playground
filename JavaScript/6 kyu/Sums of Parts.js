function partsSums(ls) {
    // your code
  const sumArr = [];
  let sum = ls.reduce((x, y) => x + y, 0);
  
  for (const n of ls) {
    sumArr.push(sum)
    sum -= n
  }
  
  return [...sumArr, 0] || [0];
}
