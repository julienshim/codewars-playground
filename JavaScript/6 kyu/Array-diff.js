function array_diff(a, b) {
   if (a.length === 0) {
    return [];
   } else {
     let diff = [];
     a.forEach(function(item) {
       if (!b.includes(item)){
        diff.push(item);
       }
     });
     return diff;
   }
}
