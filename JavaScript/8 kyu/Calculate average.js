function find_average(array) {
  // your code here
  return array.reduce((a,b) => a+b, 0) / array.length;
}
