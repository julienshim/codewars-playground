function generator(sequencer) {
    const next = sequencer.apply(null, [].slice.call(arguments, 1));
    return {
      next,
    };
  }
  
  function dummySeq() {
    return function() {
      return "dummy";
    };
  }
  
  function factorialSeq() {
    let [n, acc] = [0, 1];
    return function() {
      if (!n) {
        n += 1;
        return acc
      }
      acc *= n
      n += 1;
      return acc
    }
  }
  
  function fibonacciSeq() {
    let [n, m] = [0, 1];
    return function() {
      let c = m;
      [n, m] = [m, n + m]
      return c;
    }
  }
  
  function rangeSeq(start, step) {
    return function() {
      var n = start;
      start += step;
      return n;
    }
  }
  
  function primeSeq() {
    function isPrime(n) {
      for (let i = 2; i < n; i += 1) {
        if (n % i === 0) return false;
      }
      return n > 1;
    }
  
    let i = 0;
  
    return function () {
      while (!isPrime(i)) {
        i += 1;
      }
      const tmp = i;
      i += 1;
      return tmp;
    };
  }
  
  function partialSumSeq() {
    const s = [...arguments];
    let [sum, i] = [0, 0];
  
    return function () {
      if (i >= s.length) {
        throw Error();
      }
      return (sum += s[i++]);
    };
  }