var number = function(busStops){
  // Good Luck!
  let people = 0;
  busStops.forEach(([a, b]) => {
    people += a;
    people -= b;
  });
  return people;
}
