function mostFrequentDays(year){
    //your code here
    const d = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const a = new Date(year, 0, 1).getDay();
    const b = new Date(year, 11, 31).getDay();
    
    if (a === b) return [d[a]];
      
    return !a || a > b  && b? 
            [d[b], d[a]] : 
            [d[a], d[b]]
  }