function solve(a,b){
    function num(s) {
      return a.filter(x => x === s).length;
    }
    return b.map(x => num(x))
  }