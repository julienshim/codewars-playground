function numberToPower(number, power){
    // Code here
    let result = 1;
    while(power > 0) {
      result *= number;
      power--;
    }
    return result;
  }