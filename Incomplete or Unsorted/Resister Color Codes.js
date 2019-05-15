function decodeResistorColors(bands) {
console.log(bands);
  const resist = {
    black: 0, 
    brown: 1, 
    red: 2, 
    orange: 3, 
    yellow: 4, 
    green: 5, 
    blue: 6, 
    violet: 7, 
    gray: 8, 
    white: 9
  }
  return bands.split(" ").map( x => resist[x]).filter(x => Number(x)).reduce((a, b) => a + b) * 10;
}
