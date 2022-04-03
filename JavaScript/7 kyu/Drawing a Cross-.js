function drawACross(n) {
    //Your code here!!!
    if (n < 3) { return 'Not possible to draw cross for grids less than 3x3!' };
    if (n % 2 === 0) { return 'Centered cross not possible!' };
    let s = 0;
    let e = n - 1;
    let cross = [];
    while(s < n) {
      const row = [...Array(n).keys()].map(x => ' ');
      row[s] = "x";
      row[e] = 'x';
      cross.push(row.join(''))
      s += 1
      e -= 1
    }
    return cross.join('\n');
  }