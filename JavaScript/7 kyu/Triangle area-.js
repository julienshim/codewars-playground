function tArea(tStr) {
  const arr = tStr.split("\n").filter(x => x);
  const height = arr.length-1;
  const width = arr[arr.length-1].split(" ").length-1;
  return (height * width) / 2;
}
