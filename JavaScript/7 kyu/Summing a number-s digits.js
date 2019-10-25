function sumDigits(number) {
  return String(number).split("").filter(x => x !== "-").map(x => parseInt(x, 10)).reduce((a,b) => a + b);
}
