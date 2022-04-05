function solution(a, b){
    // your code here
    const [max, min] = [...arguments].sort((a, b) => b.length - a.length);
    return min + max + min;
  }