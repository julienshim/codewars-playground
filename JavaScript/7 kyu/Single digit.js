function singleDigit(n) {
    if (String(n).length === 1) { 
      return n;
    }
    const sum = [...String(n.toString(2))].reduce((a, c) => a + +c, 0);
    return singleDigit(sum);
  }