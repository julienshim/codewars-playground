function beggars(values, n){
 //your code here
  let beggarray = [];
  for (let i = 0; i < n; i++) {
    let sum = 0
    for (let j = i; j < values.length ; j += n) {
      sum += values[j]
    }
    beggarray.push(sum)
  }
  return beggarray
}
