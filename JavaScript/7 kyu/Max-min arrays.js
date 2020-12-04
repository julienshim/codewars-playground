function solve(arr){
    //..
  const max = arr.slice(0).sort((a,b) => b-a);
  const min = arr.slice(0).sort((a,b) => a-b);
  const maxMin = [];
  let position = 0;
  while(maxMin.length < arr.length) {
    maxMin.push(max[position])
    if(maxMin.length < arr.length) {
      maxMin.push(min[position])
    }
    position++
  }
  return maxMin;
};
