function checkExam(array1, array2) {
 // good luck
 let sum = 0;
 for (let i = 0; i < array1.length; i++) {
   if (array2[i] !== "") {
     sum = sum += array1[i] === array2[i] ? 4 : -1;
   }
 }
 return sum > 0 ? sum : 0;
}
