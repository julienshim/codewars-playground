function highestValue(a, b) {
    function sum(str) {
      return str.split("").reduce((acc, curr) => acc + curr.charCodeAt(), 0)
    }
    const sumA = sum(a)
    const sumB = sum(b)
    return sumA > sumB || sumA === sumB ? a : b;
  }