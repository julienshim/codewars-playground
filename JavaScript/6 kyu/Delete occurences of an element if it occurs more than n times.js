function deleteNth(arr,n){
  // ...
  const count = {};
  const arrN = [];
  
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (!count[current]) {
      count[current] = 1
      arrN.push(current)
    } else {
      count[current] = count[current] + 1
      if (count[current] <= n) {
        arrN.push(current)
      }
    }
  }
  
  return arrN
}
