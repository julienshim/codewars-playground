var summation = function (num) {
  // Code here
  return Array.from(Array(num).keys()).map(n => n + 1).reduce((a, c) => a + c);
}
