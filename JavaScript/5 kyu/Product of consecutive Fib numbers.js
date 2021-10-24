function productFib(prod){
    // ...
    let n = 0;
    let m = 1;  
    while(n * m < prod) {
      m = n + m;
      n = m - n;
    }
    return [n, m, n * m === prod];
  }