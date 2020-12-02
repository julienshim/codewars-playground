function solve(arr){
//..
  const dominant = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1 ) {
      if (arr[i] < arr[j]) {
        break;
      }
      if (j === arr.length-1 && !dominant.includes(arr[i])) {
        dominant.push(arr[i])
      }
    }
    if (i === arr.length-1 && !dominant.includes(arr[i])) {
        dominant.push(arr[i])
    }
  }
  return dominant;
};
