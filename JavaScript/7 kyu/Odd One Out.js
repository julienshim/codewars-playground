function oddNum(arr) {
  return arr.map(x => x % 2 === 0 ? "even" : "odd").indexOf("odd");
}
