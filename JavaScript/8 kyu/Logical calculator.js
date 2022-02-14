function logicalCalc(array, op){
    //your code here
    const opKey = {
        AND: (a, b) => a && b,
        OR: (a, b) => a || b,
        XOR: (a, b) => a !== b,
    }
    return array.reduce(opKey[op]);
  }