// Node v10.x

function multiply(a, b)
{ 
  const n = BigInt(a);
  const m = BigInt(b);
  const res = n * m
  return res.toString();
}