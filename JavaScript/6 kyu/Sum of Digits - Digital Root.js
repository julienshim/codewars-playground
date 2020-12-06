function digital_root(n) {
  // ...
  const sum = String(n).split("").reduce((a,b) => +a + +b, 0)
  return String(sum).length === 1 ? sum : digital_root(sum);
}
