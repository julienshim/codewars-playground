function factorial(n)
{
  // Calculate the factorial here
  if (n < 0 || n > 12) { throw new RangeError('n must be between 0 and 12') };
  return n === 0 ? 1 : n * factorial( n - 1 );
}
