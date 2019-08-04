function matchArrays(v,r){
  let count = 0;
  r.forEach(x => {
    v.includes(x) && count++;
  })
  return count;
}
