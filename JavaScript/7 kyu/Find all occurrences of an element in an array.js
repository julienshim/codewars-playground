const findAll = (array, n) => {
  // your code here
 const occ = [];
 array.forEach((x, i) => {
   if (x === n) {
     occ.push(i);
   }
 })
 return occ
}