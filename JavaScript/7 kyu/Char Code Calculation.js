function calc(x){
    const reduceTotal = s => s.split('').map(l => +l).reduce((a, b) => a + b);
    const total1 = x.split('').map(l => l.charCodeAt()).join('');
    const total2 = total1.split('').map(n => n === '7'? '1': n).join('');
    return reduceTotal(total1) - reduceTotal(total2);
  }