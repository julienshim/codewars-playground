function findMaxRange(ranges){
  //coding and coding..
  let abs = undefined;
  let index = [];
  ranges.forEach((x,i) => {
    const split = x.split(" ")
    const temp = Math.abs(split[3]-split[1]);
    if (abs === undefined || temp > abs) {
      abs = temp;
      index = [i]
    } else if (temp === abs) {
      index.push(i)
    }
  })
  return index.map(x => ranges[x]);
}
