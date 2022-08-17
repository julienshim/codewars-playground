function racePodium(blocks) {
    // your code here
    
    let second = Math.ceil(blocks / 3);
    let first = second + 1;
    let third = blocks - first - second;
    
    if (third === 0) {
      third += 1
      second -= 1
    }
    
    return [second, first, third]; 
  }
  