function XO(str) {
    //code here
    let xo = {
      x: 0,
      o: 0
    };
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (char === 'x' || char === 'o') {
        xo[char]++
      }
    }
    return xo.x === xo.o;
}
