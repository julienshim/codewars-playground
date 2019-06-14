function isLeapYear(year) {
  // TODO
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
