function comp(array1, array2){
  //your code here
  if (!array1 || !array2) {
    return false;
  } else {
    array1 = array1.map(a => { return a*a }).sort((a,b) => { return b-a }); 
    array2 = array2.sort((a,b) => { return b-a });
    for (let i = 0; i < array1.length; i++) {
      if (array2[i] !== array1[i]) {
         return false;
      }
    }
    return true;
  }
}
