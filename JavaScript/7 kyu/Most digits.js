function findLongest(array){
  // code here
  return array.sort((a, b) => String(b).length - String(a).length)[0]
}
