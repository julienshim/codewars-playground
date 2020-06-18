function isTriangular(t) {
  // Your code here
  let sum = 0
  for (let i = 0; sum < t; i++) {
    sum += i
    if (sum === t) {
      return true;
    }
  }
  return false;
}
