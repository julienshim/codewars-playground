function tickets(peopleInLine) {
  // ...
  var twentyFive = 0;
  let fifty = 0;
  for (const value of peopleInLine) {
    if (value == 25) {
      twentyFive += 1;
    }
    if (value == 50) {
      twentyFive -= 1;
      fifty += 1;
    }
    if (value == 100) {
      if (fifty == 0 && twentyFive >= 3) {
        twentyFive -= 3;
      } else {
        twentyFive -= 1;
        fifty -= 1;
      }
    }
    if (twentyFive < 0 || fifty < 0) {
      return "NO";
    }
  }
  return "YES";
}
