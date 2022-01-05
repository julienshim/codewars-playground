function pairZeros(arr) {
    // your code here
    let open = true
    const output = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === 0) {
        if (open) {
          output.push(arr[i]);
          open = !open;
        } else {
          open = !open;
        };
      } else {
        output.push(arr[i])
      };
    };
    return output;
  };