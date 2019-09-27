function findUniq(arr) {
  // do magic
  const sorted = arr.sort((a,b) => a - b);
  return sorted[0] === sorted[1] ? sorted[sorted.length-1] : sorted[0];
}
