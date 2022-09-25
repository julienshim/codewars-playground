function findMultiples(integer, limit) {
  //your code here
  const list = [...Array(limit - integer + 1).keys()].map(n => n + integer);
  return integer === 1 ? list : list.filter(n => n % integer === 0)
}
