function addLength(str) {
  //start-here
  return str.split(" ").map((x) => `${x} ${x.length}`);
}
