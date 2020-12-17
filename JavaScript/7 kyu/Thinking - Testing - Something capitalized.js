function testit(s){
  if (s.length) {
    return s.split(' ').map(x => {
      if (x.length <= 1) {
        return x.toUpperCase();
      }
      return x.slice(0, x.length-1) + x.slice(x.length-1).toUpperCase();
    }).join(' ');
  }
  return s
}
