function factorial(n){
  return f(n).toString();
  
  function f(n) {
    if (n < 0) {
      return null;
    } else if (n === 0) {
      return 1;
    } else {
    return n * factorial(n-1);
    };
  };
};

// This has been idiotic so far...
