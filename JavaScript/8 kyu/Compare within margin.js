function closeCompare(a, b, margin){
    // ...
    switch(true) {
      case Math.abs(a - b) <= (margin || 0):
        return 0;
      case a > b:
        return 1;
      case a < b:
        return -1
     }
  }
  