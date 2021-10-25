function balancedNum(number)
{   
  const sNumber = String(number);
  if (sNumber.length <= 2) { return 'Balanced' };
  
  const sum = (arr) => arr.map(n => +n).reduce((a, b) => a + b);
  
  const middle = (sNumber.length - 1) / 2;
  const arr = [...sNumber].slice(0, middle)
  const arrRev = [...sNumber].reverse().slice(0, middle)
  
  return sum(arr) === sum(arrRev) ? "Balanced" : 'Not Balanced';
}
