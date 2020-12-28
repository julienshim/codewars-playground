function min(arr, toReturn) {
  // TODO
  const min = Math.min(...arr);
  if (toReturn === 'value') {
    return min;
  }
  if (toReturn === 'index') {
    return arr.indexOf(min);
  }
}
