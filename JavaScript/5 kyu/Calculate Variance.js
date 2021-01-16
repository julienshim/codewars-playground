// Takes an array of numbers and returns the variance as a float.
// The array of numbers will always have at least one element in it.
var variance = function(numbers) {
  const length = numbers.length;
  const mean = numbers.reduce((a, b) => a + b) / length;
  return numbers.map(n => Math.pow(n-mean, 2)).reduce((a,b)=> a+ b) / length;
};
