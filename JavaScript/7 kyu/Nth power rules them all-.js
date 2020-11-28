function modifiedSum(a, n) {
  // Write your code here
  const sum = a.reduce((a, b) => a + b);
  const sumP = a.map(x => Math.pow(x, n)).reduce((a, b) => a + b);
  return sumP - sum;
}
