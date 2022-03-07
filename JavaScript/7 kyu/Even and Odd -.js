function evenAndOdd(num){
    // your code here
    const res = (i) => Number([...String(num)].filter(n => +n % 2 === i).join(''));
    return [res(0), res(1)];
  }