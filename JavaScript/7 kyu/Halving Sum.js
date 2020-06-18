function halvingSum(n) {
  return n === 1 ? 1 : n + halvingSum(Math.floor(n/2))    
}
