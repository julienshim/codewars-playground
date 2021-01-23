function solve(str){
   //..
  let revArrNS = [...str].reverse().filter(l => l !== ' ');
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      const head = revArrNS.slice(0, i);
      const tail = revArrNS.slice(i, revArrNS.length);
      revArrNS = [...head, ' ', ...tail]
    }
  }
  
  return revArrNS.join("")
  
  }
