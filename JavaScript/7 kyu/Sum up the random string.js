function sumFromString(str){
    // ...
    const numArr = str.match(/\d{1,}/g);
    return numArr ? numArr.reduce((a,b) => a + +b, 0) : 0;
  }