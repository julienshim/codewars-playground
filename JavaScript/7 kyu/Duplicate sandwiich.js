function duplicateSandwich(a) {
    for (let i = 0; i < a.length - 1; i += 1) {
      let j = a.indexOf(a[i], i + 1);
      if (j > -1) {
        return a.slice(i + 1, j);
      }
    }  
}