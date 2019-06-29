function sumArray(array) {
  const sortedArr = array && array.sort((a, b) => a-b);
  return !sortedArr || sortedArr.length < 3 ? 0 : sortedArr.slice(1, sortedArr.length-1).reduce((a,b) => a + b, 0);
}
