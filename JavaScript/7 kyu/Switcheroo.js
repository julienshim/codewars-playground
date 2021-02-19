function switcheroo(x){
  const key = {
      a: 'b',
      b: 'a'
  }
  return [...x].map(l => key[l] || l).join("");
}
