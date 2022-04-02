function toDayOfYear(arr) {
    // return a number
    const dateString = arr.reverse().join('-');
    const n = new Date(dateString);
    const s = new Date(n.getFullYear(), 0, 0);
    const dayInSeconds = 1000 * 60 * 60 * 24;
    const nth = Math.floor((n - s) / dayInSeconds);
    return nth;
  }