function getNumberFromString(s) {
    return +s.match(/\d{1,}/g).join('');
  }