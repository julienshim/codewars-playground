function sumOrProduct(array, n) {
  // your code here
  const sorted = array.sort((a,b) => a - b);
  const sum = sorted.slice(sorted.length-n).reduce((a,b) => a + b);
  const prod = sorted.slice(0,n).reduce((a,b) => a *= b)
  return sum === prod ? 'same' : sum > prod ? 'sum' : 'product';
}
