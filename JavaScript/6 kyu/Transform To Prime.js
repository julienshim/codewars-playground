function minimumNumber(numbers){
  //your code here
  let sum = numbers.reduce((a, b) => a + b, 0);
  let p = sum;
  
  while(!isPrime(p)) {
    p++
  }
  
  return p - sum;
  
}

function isPrime(c) {
  if (c === 1) {
    return false;
  } else if (c === 2) {
    return true;
  } else {
    for (let i = 2; i < c; i++) {
      if (c % i === 0) {
        return false;
      }
    }
    return true;
  }
};
