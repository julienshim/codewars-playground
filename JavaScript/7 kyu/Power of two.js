function isPowerOfTwo(n){
    //.. should return true or false ..
    if (n > 2) { return isPowerOfTwo(n/2) }
    if (n === 2 || n === 1) { return true };
    return false
  }