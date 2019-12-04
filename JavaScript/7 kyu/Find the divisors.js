function divisors(integer) {
  const arr = [];
  const midpoint = Math.ceil(integer / 2);
  for (let i = 2; i <= midpoint; i++) {
    if (integer % i === 0) {
      arr.push(i);
    }
  }
  return arr.length > 0 ? arr : `${integer} is prime`;
};
