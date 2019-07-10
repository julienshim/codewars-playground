function countBy(x, n) {
  let z = [];
  while (z.length < n) {
    for (let i = x; i <= (x * n); ++i) {
      i % x === 0 && z.push(i);
    }
  }
  return z;
}
