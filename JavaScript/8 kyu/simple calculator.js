function calculator(a,b,sign){
    const invalidSign = !['+', '-', '*', '/'].includes(sign);
    const invalidAB = [a, b].some(x => typeof(x) !== 'number');
    
    if (invalidSign || invalidAB) {
      return 'unknown value';
    };
    
    return eval([a, sign, b].join(''));
  }
  