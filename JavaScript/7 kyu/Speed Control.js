function gps(s, x) {
    // your code
    if(x.length < 2){
      return 0;
    }
    const m = 3600;
    const a = x.map((x, i, a) => (a[i+1] - x) * m / s).slice(0, x.length-1);
    return Math.max(...a);
}
