function lastDigit(n, d) {
    return d > 0 ? [...String(n)].map(n => +n).slice(-d) : [];
  }