function isPythagoreanTriple(integers) {
  // Good luck friends!
  const integers_squared = [...integers].map(n => Math.pow(n, 2))
  const c = Math.max(...integers_squared)
  return c === integers_squared.filter(n => n !== c).reduce((a, b) => a + b, 0);
}