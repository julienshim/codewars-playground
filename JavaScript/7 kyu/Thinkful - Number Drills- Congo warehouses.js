function boxCapacity(length, width, height) {
    return [...arguments].reduce((a,c) => a *= Math.floor(c * 12 / 16), 1); //code here
  }