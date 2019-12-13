function dbSort(a){
// Code here
  const strings = a.filter( x => typeof x === "string" ).sort((a, b) => { 
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  });  
  
  const numbers = a.filter( x => typeof x === "number").sort((a, b) => a-b);
  
  return [...numbers, ...strings];
}
