function getSumOfDigits(integer) {
  let sum = 0;
  const digits = String(integer).split("");
  for(var i = 0; i < digits.length; i += 1) {
    sum += +digits[i];
  }
  return sum;
}
