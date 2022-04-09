function findSum(){
    //code here
    const args = [...arguments];
    if (args.some(n => n < 0)) { return -1 };
    return args.reduce((a, b) => a + b, 0);
  }