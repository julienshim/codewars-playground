function count (string) {  
  // The function code should be here
   let seen = [];
   let char = {};
   string.split("").forEach(function(c){
     if (seen.indexOf(c) === -1) {
       seen.push(c)
       char[c] = 1
     } else {
       char[c]++;
     }
   });
   return char
}
