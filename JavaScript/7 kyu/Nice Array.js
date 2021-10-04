function isNice(arr){
  if (!arr || arr.length < 2) { return false}
  
  function isNice(n) {
    return arr.includes(n + 1) || arr.includes(n-1);
  }
  
  return arr.every(isNice);
}
