function solution(number){
    // ...
    function sum(n) {
      const m = Math.floor((number - 1) / n);
      return n * m * (m + 1) / 2;
    }
    return sum(3) + sum(5) - sum(15);
  }