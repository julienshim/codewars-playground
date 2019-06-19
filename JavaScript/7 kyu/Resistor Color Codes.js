function decodeResistorColors(bands) {
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
    white: 9,
    gold: 'gold',
    silver: 'silver'
  }
  const codes = bands.split(" ").map( x => resist[x]);
  const resistance = ((10 * codes[0]) + codes[1]) * Math.pow(10, codes[2])
  const resistanceFormatted = resistance < 1000 ? resistance : resistance < 1000000 ? `${resistance/1000}k` : `${resistance/1000000}M`;
  const tolerance = !codes[3] ? 20 : codes[3] === 'silver' ? 10 : 5;
  return `${resistanceFormatted} ohms, ${tolerance}%`
}
