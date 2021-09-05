function pipeFix(numbers){
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return [...new Array(max-min+1)].map((x, i) => min + i);
  }