function evenNumbers(array, number) {
  // good luck
  return array.filter( x => x % 2 === 0 ).slice(-number);
}
