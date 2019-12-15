function GetSum( a,b )
{
   //Good luck!
   console.log(a,b);
   let numArr = [];
   let start = a < b ? a : b;
   let end = a > b ? a : b;
   for (let i = start; i <= end; i++){
    numArr.push(i);
   }
   return numArr.reduce((a, b) => a + b);
}
