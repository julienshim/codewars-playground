function diamond(n){
  if (n < 0 || n % 2 !== 1) { return null }; 
  
  const m = Math.floor(n / 2);
  
  const diam = [...Array(n).keys()]
      .map((row, index) => {
        const spacesN = Math.abs(index - m);
        const spaces = Array(spacesN + 1).join(' ')
        const asteriskN = n - spacesN * 2;
        const asterisks = Array(asteriskN + 1).join('*')
        return spaces + asterisks;
      })
      .join('\n') + '\n';
  return diam;
}
