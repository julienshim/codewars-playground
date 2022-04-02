function stickyCalc (operation, val1, val2){
    const intefy = (n) => Number.isInteger(n) ? n : Math.round(n);
    const stick = +(String(intefy(val1))+String(intefy(val2)))
    let output = undefined;
  
    switch(true) {
      case operation == '+':
        output = stick + val2;
        break;
      case operation == '-':
        output = stick - val2;
        break;
      case operation == '*':
        output = stick * val2;
        break;
      case operation == '/':
        output = stick / val2;
        break;
      default:
        return 'Not a valid operation.'
    }
  
    return Math.round(output);
}