function order(words){
  // ...
  let split = words.trim().split(" ");
  let order = [];
  let n = 1;
  if(words.length > 0) {
    while (order.length < split.length) {
      for (let i = 0; i < split.length; i++) {
        split[i].includes(n) && order.push(split[i]);
      };
      n++;
    }
  }
  return order.join(" ");
}
