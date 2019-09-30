const reverseSeq = n => {
  return Array.from(new Array(n).keys()).map(x => ++x).sort((a, b) => b - a);
};
