function sumOfDifferences(arr) {
  const descArr = arr.sort((a,b) => b-a);
  let difference = 0;
  for (let i = 0; i < descArr.length - 1; i++) {
    difference += Math.abs(descArr[i] - descArr[i+1]);
  }
  return difference;
}
