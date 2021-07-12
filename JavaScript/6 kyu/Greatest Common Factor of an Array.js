function greatestCommonFactor(array) {
  // your code here
  for (let i = Math.max(...array); i > 0; i--) {
    if(array.every(n => n % i === 0)) {
      return i;
    }
  }
};
