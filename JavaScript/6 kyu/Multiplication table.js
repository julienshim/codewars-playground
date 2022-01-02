multiplicationTable = function(size) {
    // insert code here
    const ref = [...Array(size).keys()].map(x => x + 1);
    return [...ref].map((x, i) => {
       return [...ref].map(n => n * (i + 1));
    });
  }
  