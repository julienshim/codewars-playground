function monkeyCount(n) {
// your code here
  return Array.from(Array(n).keys()).map(x => ++x);
}
