function points(games) {
  // your code here
  return games.map(x => {
    const [a, b] = x.split(":");
    if (a > b) {
      return 3;
    } else if (a < b) {
      return 0;
    } else {
      return 1;
    }
  }).reduce((a,b) => a + b, 0);
}
