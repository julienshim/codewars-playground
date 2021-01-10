var moveZeros = function (arr) {
  // TODO: Program me
  return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0));
}
