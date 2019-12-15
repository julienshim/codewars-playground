function roundToNext5(n){
  // ...
  switch(true) {
    case n % 5 === 0:
      return n;
      break;
    case n > 0:
      return n + (5 - (n % 5));
      break;
    case n < 0:
      return n - (n % 5);
      break;
    default:
      return n;
  }
}
