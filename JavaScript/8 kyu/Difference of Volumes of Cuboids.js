function findDifference(a, b) {
  //loading...
  return Math.abs(returnVolume(a) - returnVolume(b))
}

function returnVolume(arr) {
  return arr.reduce((a,c) => a * c); 
}
