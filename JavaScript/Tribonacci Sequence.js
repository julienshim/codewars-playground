function tribonacci(signature,n){
  //your code here
  if (n === 0) {
    return [];
  }
  let sequence = [];
  for (let i = 0; i < n; i++){
    if (i < 3) {
      sequence.push(signature[i]);
    } else {
      let set = sequence[i-1] + sequence[i-2] + sequence[i-3];
      sequence.push(set);
    }
  }
  return sequence;
}
