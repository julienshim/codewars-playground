function nbDig(n, d) {
    let count = 0;
    for(let i = 0; i <= n; i++) {
      const square = String(i*i).split("");
      square.forEach(function(c){
        c === String(d) && count++;
      });
    }
    return count
}
