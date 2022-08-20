function arrange(s) {
    // your code here
    const t = [];
    
    let d = 0
    
    let isPushing = true;
    let isFlipped = false;
    
    while (isPushing) {
      
      if (t.length !== s.length) { t.push(isFlipped ? s[s.length-1-d] : s[d]) }
      if (t.length !== s.length) { t.push(isFlipped ? s[d] : s[s.length-1-d]) }
      
      d += 1
      isFlipped = !isFlipped
      
      if (t.length === s.length) {isPushing = false };
      
    }
    
    return t;
  }
  