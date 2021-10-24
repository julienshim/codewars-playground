function generatePairs(m, n) {
    const arr = [];
    for (let i = m; i <= n; i += 1) {
      for (let j = i; j <= n; j += 1) {
        arr.push([i,j]);
      }
    }
    return arr;
  }