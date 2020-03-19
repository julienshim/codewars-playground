function allNonConsecutive (arr) {
 const nc = [];
 let left = arr[0]
 for(let i = 1; i < arr.length; i++) {
   const right = arr[i]
   if (right - 1!== left) {
     const obj = {
       i, 'n': arr[i]
     }
     nc.push(obj);
   }
   left = right - 1;
   left++
 }
 return nc
}
