function last(x){
  return x.split(" ").sort((a, b) => {
    if (a[a.length-1] > b[b.length-1]) {
        return 1;
    }
    if ( b[b.length-1] > a[a.length-1]) {
        return -1;
    }
    return 0;
  });
}
