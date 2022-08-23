function isCoprime(x, y) {
    // your code here
    const findFactors = (n) => {
      const tmp = [];
      
      for (let i = 1; i <= n; i ++) {
        if (n % i === 0) {
          tmp.push(i);
        };
      };
      
      return tmp;
    } 
    
    const [xF, yF] = [...arguments].map(n => findFactors(n));
  
    return xF.filter(x => yF.includes(x)).length === 1;
  }
  