function pyramid(balls) {
  // your code here
  let rows = 1;
  while (balls > rows) {
    balls -= rows; 
    if (balls > rows) {
      rows++
    }
  }
  return rows;
}
