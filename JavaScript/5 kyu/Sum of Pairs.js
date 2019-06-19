var sum_pairs=function(ints, s){
    //your code here
    const seen = {};
    
    for (let i = 0; i < ints.length; i++) {
      const current = ints[i];
      const need = s - current;
      if (seen[need]) {
        return [need, current];
      } else {
        seen[current] = true;
      }
    }
    
    // **** brute force way ****
    //     let index = 0; 
    //     let pair;
    //     let min = ints.length;
    //     for (let i = 0; i < ints.length; i++) {
    //       for (let j = i + 1; j < ints.length; j++) {
    //        if (ints[i] + ints[j] === s && j < min &&Sum of Pairs i !== j) {
    //          min = j
    //          pair = [ints[i], ints[j]];
    //        }
    //       }
    //     }
    //     return pair;
    
}
