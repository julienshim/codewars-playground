function breakChocolate(n,m) {
  const breaks = n * m - 1;
  const hasDimension = n === 0 || m === 0;
  return  hasDimension ? 0 : breaks;
}
