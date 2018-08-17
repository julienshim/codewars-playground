var isSquare = function(n){
    if (Math.sqrt(n) % 1 === 0 && Math.sqrt(n) !== "undefined" && n >= 0) {
      return true;
    } else {
      return false;
    }
  }