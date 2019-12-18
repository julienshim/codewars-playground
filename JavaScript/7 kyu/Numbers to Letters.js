function switcher(x){
  const set = "zyxwvutsrqponmlkjihgfedcba!? ".split("");
  const key = {
  
  }
  set.forEach((x, i) => {
    key[i+1] = x
  })
  return x.map(x => key[x]).join("");
}
