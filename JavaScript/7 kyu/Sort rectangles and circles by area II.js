function sortByArea(array) {
  //concat to create a copy to avoid 'Thou shalt not clobber thy input!' message
  return array.concat().sort((a, b) => area(a) - area(b));
}

function area (value) {
  if (typeof value === "object") {
    return value[0] * value[1]; 
  } else {
    return Math.PI * Math.pow(value, 2);
  }
}
