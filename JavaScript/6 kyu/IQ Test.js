function iqTest(numbers){
  // ...
  const even = [];
  const odd = [];
  let position = 0;
  
  numbers.split(" ").forEach((x, i) => {
    x % 2 === 0 ? even.push(i) : odd.push(i);
  })

  return 1 + (even.length === 1 ? even[0] : odd[0]);
}
