function findOutlier(integers){
  //your code here
  const even = integers.filter(x => x % 2 === 0);
  const odd = integers.filter(x => Math.abs(x % 2) === 1);
  return even.length === 1 ? even[0] : odd[0];
}
