function leastLarger(a,i) {
  const target = a[i];
  const sortedLargerArr = [...a].filter(n => n > target).sort((a,b)=> a-b)
  const leastLarger = sortedLargerArr[0]
  return a.indexOf(leastLarger)
}
