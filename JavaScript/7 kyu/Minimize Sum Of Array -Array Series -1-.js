function minSum(arr) {
  // your code here
  const sorted = arr.sort((a, b) => a - b);
  const mid = arr.length / 2;
  let a = 0
  let b = arr.length - 1;
  let min = 0;
  
  while ( a < mid ) {
    min += sorted[a] * sorted[b];
    a++
    b--
  }
  
  return min;
}
