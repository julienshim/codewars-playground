function squareOrSquareRoot(array) {
    return array.map(n => Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : Math.pow(n, 2));
  }