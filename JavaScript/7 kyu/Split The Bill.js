function splitTheBill(x) {
    //code away...
    const m = Object.values(x).reduce((a, b) => a + b, 0) / Object.keys(x).length;
    
    for(let key of Object.keys(x)) {
      const d  = x[key] - m;
      x[key] = +(Math.round(d*100)/100).toString();
    };
  
    return x;
}
