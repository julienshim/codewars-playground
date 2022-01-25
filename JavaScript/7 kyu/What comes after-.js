function comes_after(str,l) {
    //code
    let result = '';
    
    if (!str) { return result };
    
    for (let i = 0; i < str.length-1; i += 1) {
      const current = str[i];
      const next = str[i+1];
      if (current.toLowerCase() === l.toLowerCase()) {
        result += next.match(/[a-z]/i) ? next : '';
      }
    };
    
    return result;
  }