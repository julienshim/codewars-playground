function evaporator(content, evap_per_day, threshold){ 
    let d = 0;
    let p = 100;
    while (p > threshold) {
      p -= p * (evap_per_day / 100);
      d += 1;
    }
    return d;
  }