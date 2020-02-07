function sumOfMinimums(arr) {
  // your code here
 return arr.map(x => Math.min(...x)).reduce((a, b) => a + b);
}
