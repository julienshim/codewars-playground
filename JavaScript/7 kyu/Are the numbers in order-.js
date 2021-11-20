function inAscOrder(arr) {
    // Code your algorithm here :)
    
    // Hmmm ... maybe we should try our luck out ...
    // if (Math.random() > 0.5) {
    //  return true;
    // } else {
    //  return false;
    // }
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+1]) {
        return false;
      }
    }
    return true;
  }