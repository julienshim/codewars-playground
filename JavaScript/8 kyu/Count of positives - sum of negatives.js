function countPositivesSumNegatives(input) {
    // your code here
      if (!input || input.length === 0) { return [] };
    
      const posLength = input.filter(n => n > 0).length;
      const negSum = input.filter(n => n < 0).reduce((a,b) => a + b, 0);
      return [posLength, negSum];
    }