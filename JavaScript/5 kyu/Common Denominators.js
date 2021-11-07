function convertFrac(lst){
    //Your code here
    if ( !lst.length ) { return '' };
    
    const max = lst.map(([n, d]) => d).reduce((a, c) => a *= c);
    const format = (a, b) => `(${a},${b})`;
    
    for(let i = 2; i <= max; i++) {
      if (lst.every(([a,b]) => i % b === 0)) {
        return lst.map(([a,b]) => format((a * i / b), i)).join(''); 
      }
    }
    
    return lst.map(([a,b]) => format(a, b)).join(''); 
  }