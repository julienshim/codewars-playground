function consecutive(arr) {
//code me
  const sortedArr = arr.sort((a,b) => a-b);
  let diff = 0;
  for(let i = 0; i < sortedArr.length-1; i++) {
      const step = sortedArr[i+1] - sortedArr[i] - 1;
      diff += step
  }
  return diff;
}
