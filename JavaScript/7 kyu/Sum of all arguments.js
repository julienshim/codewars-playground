function sum() {
    // return the sum of all arguments given.
    return [...arguments].reduce((a, b) => a + b, 0);
  }