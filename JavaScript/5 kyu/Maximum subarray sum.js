var maxSequence = function(arr){
    // ...
    let b = 0;
    let c = 0;
    for (let i = 0; i < arr.length; i += 1) {
      c = Math.max(0, c + arr[i]);
      b = Math.max(b, c);
    };
    return b;
  }