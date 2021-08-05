function seven(m) {
    // your code
  m = String(m)
  
  if (m.length < 2) { return [+m, 0] };
  
  let count = 1;
  let head = m.slice(0, -1);
  let tail = 2 * m.slice(-1);
  let sum = String(+head - +tail)
  
  while (sum.length > 2) {
      head = `${sum}`.slice(0, -1);
      tail = 2 * `${sum}`.slice(-1);
      sum = String(+head - +tail)
      count += 1;
  }
  
  return [+sum, count]
}
