function isPangram(string){
  //...
  const check = {}
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("").forEach(x => {
     check[x] = false;
  })
  string.split("").forEach(x => {
    if(x.match(/[a-z]/i)) { check[x.toLowerCase()] = true; }
  });
  return !Object.values(check).includes(false);
}
