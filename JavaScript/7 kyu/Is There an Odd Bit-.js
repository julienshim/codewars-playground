function anyOdd(x) {
  // your code here
  const filterOddIndex = (_, i) => i % 2 === 1;
  const oddIndexArr = x.toString(2).split('').reverse().filter(filterOddIndex)
  const isAllZero = n => n === '0';
  return oddIndexArr.every(isAllZero) ? 0 : 1
}
