function largestPairSum(numbers)
{
  //TODO: Write your Code here
  return numbers.sort((n1,n2) => {
    if (n1 > n2) {
      return -1
    } else if (n1 < n2) {
      return 1
    }
    return 0
  }).slice(0, 2).reduce((a, c) => a + c, 0);
}