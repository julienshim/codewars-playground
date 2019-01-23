var BigNumber = require('bignumber.js');

function factorial(n){
  return f(n).toFixed();
  
  function f(n) {
    if (n < 0) {
      return null;
    } else if (n === 0) {
      return 1;
    } else {
    return new BigNumber(n).times(factorial(n-1));
    };
  };
};

