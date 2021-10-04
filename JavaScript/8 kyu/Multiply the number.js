function multiply(number){
  //your code here
  const length = String(number).replace('-', '').length;
  return number * Math.pow(5, length)
}
