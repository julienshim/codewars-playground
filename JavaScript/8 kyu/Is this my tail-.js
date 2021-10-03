function correctTail(body, tail){
  
    const sub = body.substr(body.length-tail.length)
    
    if (sub === tail) {
      return true;
    }
    
    return false
    
  }
    
  