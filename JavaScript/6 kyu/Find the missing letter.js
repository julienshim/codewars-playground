function findMissingLetter(array) {
  const missingCharCode = array.map(x => x.charCodeAt(0)).filter((x, i, a) => x - a[0] !== i)[0] - 1;
  return String.fromCharCode(missingCharCode);
}
