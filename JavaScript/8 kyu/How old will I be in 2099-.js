function  calculateAge() {
  
    // enter your code here.
      const [alt, present] = [...arguments];
      const diff = present - alt;
      const format = d => `${d} year${d > 1 ? 's': ''}`;
      
      if (diff < 0) { return `You will be born in ${format(-diff)}.` };
      if (diff > 0) { return `You are ${format(diff)} old.` };
      
      return 'You were born this very year!'
    }