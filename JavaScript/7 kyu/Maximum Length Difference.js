function mxdiflg(a1, a2) {
    // your code
    if (a1.length === 0 || a2.length === 0) {
      return -1
    }
    const min1 = minMax(a1, "min");
    const max1 = minMax(a1, "max");
    const min2 = minMax(a2, "min");
    const max2 = minMax(a2, "max");
    return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1))
}

const minMax = (arr, type) => {
  const arrL = arr.map(s => s.length);
  if (type === "max") {
    return Math.max(...arrL)
  }
  if (type === "min") {
    return Math.min(...arrL);
  }
} 
