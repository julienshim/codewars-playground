var isSquare = function(arr){
  //Your code here
  if ( arr.length < 1 ) { return undefined }
  return arr.every(n => Number.isInteger(Math.sqrt(n)))
}