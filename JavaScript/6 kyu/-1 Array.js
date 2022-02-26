function upArray(arr){
    // ... 
    if (!arr.length || arr.some((n) => n < 0 || n > 9)) {
      return null;
    }
    // 'Big' arrays
    const l = arr.length;
    const next = (a, i) => a[a.length - i] + 1;
    if (l > 10) {
      arr[l - 1] = next(arr, 1);
      if (arr[l - 1] === 10) {
        arr[l - 1] = 0;
        arr[l - 2] = next(arr, 2);
      }
      return arr;
    }
    return [...String(BigInt(+arr.join("") + 1))].map((n) => +n);
  }