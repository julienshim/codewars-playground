function numbersWithDigitInside(x, d) {
  const array = [...Array(x).keys()].map(x => ++x).filter(x => String(x).includes(d));
  const count = array.length;
  const sum = array.reduce((a,b) => a+b, 0);
  const product = array.reduce((a,b) => a *= b, count === 0 ? 0 : 1);
  return [count, sum, product];
}
