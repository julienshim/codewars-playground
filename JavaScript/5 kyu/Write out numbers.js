function number2words(n){
    // works for numbers between 0 and 999999
    const nineteen = [
      "zero", "one", "two", "three", "four",
      "five", "six", "seven", "eight", "nine",
      "ten", "eleven", "twelve", "thirteen", "fourteen",
      "fiften", "sixteen", "seventeen", "eighteen", "nineteen"
    ];
    
    const tens = {
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety"
    };
    
    if (n < 20) {
      return nineteen[n];
    } else if (n < 100) {
      const main = n - n % 10;
      const remainder = n - main
      return tens[main] + (remainder === 0 ? '' : '-' + number2words(remainder));
    } else if (n < 1000) {
      const main = Math.floor(n / 100);
      const remainder = n % 100;
      return nineteen[main] + ' hundred' + (remainder === 0 ? '' : ' '+ number2words(remainder));
    } else {
      const main = Math.floor(n/1000)
      const remainder = n % 1000;
      return number2words(main) + ' thousand' + (remainder === 0 ? '' : ' ' + number2words(remainder));
    }
  }