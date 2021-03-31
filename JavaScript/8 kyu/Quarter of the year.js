const quarterOf = (month) => {
    // Your code here
    switch(true) {
        case month <= 3:
          return 1
          break;
        case month <= 6:
          return 2;
          break;
        case month <= 9:
          return 3;
          break;
        default:
          return 4;
    }
  }