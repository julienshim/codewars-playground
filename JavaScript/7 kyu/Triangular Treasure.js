// Return the nth triangular number
function triangular( n ) {
  return n <= 0 ? 0 : n + triangular(n-1);
}
