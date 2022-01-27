function playPass(s, n) {
    // your code
  const pushLetter = (l) => {
    const a = 'abcdefghijklmnopqrstuvwxyz';
    const m = (a.indexOf(l.toLowerCase()) + n) % 26;
    return a[m];
  };
  
  const pushNumber = (d) => {
    return String(9-+d);
  };
  
  return [...s].map((l, i)=> {
     const isA = new RegExp('[a-z]', 'i');
     const isN = new RegExp('[0-9]');
     let b = l;
     if(isA.test(l)){
       b = pushLetter(l);
     };
     if(isN.test(l)){
       b = pushNumber(l);
     };
     return i % 2 === 0 ? b.toUpperCase() : b.toLowerCase();
  }).reverse().join('');
}
