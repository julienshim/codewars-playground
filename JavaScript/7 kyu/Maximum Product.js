function adjacentElementsProduct(array) {
    // max product
    let m = array[0] * array[1];
    for (let i = 1; i < array.length- 1; i += 1) {
     const p  = array[i] * array[i + 1];
     if (p > m) {
       m = p;
     }
    }
    return m;
  }