function median(array) {
//code here
  const isE = array.length % 2 == 0;
  const m = Math.floor(array.length / 2);
  const mArr = array.sort((n, m) => n - m).slice(isE ? m - 1 : m, m + 1);
  return mArr.reduce((a, c) => a + c) / mArr.length;
}