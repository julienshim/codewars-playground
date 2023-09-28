function sumTriangularNumbers(n) {
  return Array.from({ length: n }, (_, i) => {
    const m = i + 1;
    return (m * (m + 1)) / 2;
  }).reduce((a, c) => a + c, 0);
}
