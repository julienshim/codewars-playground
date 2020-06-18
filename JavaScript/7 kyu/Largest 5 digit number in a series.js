function solution(digits){
    let highest = +digits.slice(0, 5);
    let a = 0;
    let b = 5;
    while (b < digits.length + 1) {
      const candidate = +digits.slice(a, b);
      if (candidate > highest) {
        highest = candidate
      };
      a++;
      b++;
    }
    return highest;
}
