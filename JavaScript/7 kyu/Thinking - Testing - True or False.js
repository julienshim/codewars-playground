function testit(n){
  const binary = n.toString(2)
  const regex = /1/g
  const ones = binary.match(regex) || [];
  return ones.length;
}
