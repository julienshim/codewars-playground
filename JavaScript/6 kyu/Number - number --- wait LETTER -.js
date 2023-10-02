function doMath(string) {
  const arr = string
    .split(" ")
    .sort((a, b) => (a.match(/[a-z]/i, "") < b.match(/[a-z]/i, "") ? -1 : 1))
    .map((item) => +item.match(/[0-9]/g, "").join(""));
  let res = arr.shift();
  for (let i = 0; i < arr.length; i++) {
    res = [res + arr[i], res - arr[i], res * arr[i], res / arr[i]][i % 4];
  }
  return Math.round(res);
}
