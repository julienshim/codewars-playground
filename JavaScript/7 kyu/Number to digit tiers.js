function createArrayOfTiers(num) {
    const arr = [];
    const string = String(num);
    for (let i = 1; i < string.length + 1; i++) {
      arr.push(string.slice(0, i))
    }
  return arr;
}
