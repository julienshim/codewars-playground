function persistence(num) {
   //code me
   if (num < 10) {
      return 0;
   } else {
     let split = num.toString().split("");
     let p = null;
     split.forEach(function(n){
        p === null ? p = n : p=p*n;
     });
     return 1 + persistence(p);
   }
}
