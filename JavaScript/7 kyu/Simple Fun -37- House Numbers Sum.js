function houseNumbersSum(inputArray) {
    //coding and coding..
    const stop = inputArray.indexOf(0);
    let sum = 0;
    for (let i = 0; i < stop; i++) {
      sum += inputArray[i];
    }
    return sum;
  }