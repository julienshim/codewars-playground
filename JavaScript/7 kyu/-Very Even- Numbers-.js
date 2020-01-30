function isVeryEvenNumber(n) {
  if (String(n).length === 1) {
    return n % 2 === 0;
  } else {
    const nReduced = String(n).split("").map(x => Number(x)).reduce((a,b) => a + b);
    return isVeryEvenNumber(Number(nReduced));
  }
}
