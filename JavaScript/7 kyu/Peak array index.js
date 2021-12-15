function peak(arr){
    //..
    const sum = (a) => {
      return a.reduce((a, b) => a + b);
    }
    for (let i = 1; i < arr.length - 1; i += 1) {
      const leftSum = sum(arr.slice(0, i));
      const rightSum = sum(arr.slice(i + 1));
      if(leftSum === rightSum) {
         return i;
      }
    }
    return -1
   }