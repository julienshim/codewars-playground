function century(year) {
  // Finish this :)
  return Math.floor(year/100) + (year % 100 === 0 ? 0 : 1);
}
