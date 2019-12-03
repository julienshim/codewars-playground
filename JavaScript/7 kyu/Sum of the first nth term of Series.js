function SeriesSum(n)
{
  // Happy Coding ^_^
  const arr = Array.from(Array(n).keys())
  return arr.reduce((acc, cur) => {
    const nth = 1 / (1 + (cur * 3));
    return acc + nth
  }, 0).toFixed(2)
}
