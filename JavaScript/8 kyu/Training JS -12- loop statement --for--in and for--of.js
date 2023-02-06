function giveMeFive(obj) {
  //coding here
  const tmp = [];
  for (let key in obj) {
    const value = obj[key];
    if (key.length === 5) {
      tmp.push(key);
    }
    if (value.length === 5) {
      tmp.push(value);
    }
  }
  return tmp;
}
