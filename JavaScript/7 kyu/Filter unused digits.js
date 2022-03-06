function unusedDigits(){
    // ...
    const join = (a) => a.join('');
    const argsArr = join([...arguments]);
    const singleDigits = Array.from(Array(10).keys());
    return join(singleDigits.filter(n => !argsArr.includes(String(n))))
  }