function twoSum(numbers, target) {
  let i = 0;
  let j = 1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j && numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}
