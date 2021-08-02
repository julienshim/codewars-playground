var findAverage = function (nums) {
  // Code here
  const count = nums.length;
  const sum = nums.reduce((a, v) => a + v, 0);
  return sum / count;
}
