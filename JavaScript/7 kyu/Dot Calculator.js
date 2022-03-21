function dotCalculator (equation) {
    const [a, o, b] = equation.split(' ');
    let sum;
    switch(true) {
        case o === '+':
          sum = a.length + b.length;
          break;
        case o === '-':
          sum = a.length - b.length;
          break;
        case o === '*':
          sum = a.length * b.length;
          break;
        case o === '//':
          sum = a.length / b.length;
          break;
        default:
          return 'Valid operator not found.'
    }
    return [...Array(Math.floor(sum)).keys()].map(n => '.').join('');
  }