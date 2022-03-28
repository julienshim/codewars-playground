function counter(){
    let curVal = 0;
    return () => {
      curVal += 1;
      return curVal;
    };
  }