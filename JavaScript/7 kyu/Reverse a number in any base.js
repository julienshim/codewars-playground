function reverseNumber(n, b) {
  // Input n and b are provided as BigInt values
  if (b === 1n) {
    return n;
  }

  let rev = 0n;

  while (n > 0n) {
    rev = rev * b + (n % b);
    n /= b;
  }

  return rev;
}
