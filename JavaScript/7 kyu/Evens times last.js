function evenLast(numbers) {
    // Good luck
    const evenArr = numbers.filter((n, i) => i % 2 === 0);
    return evenArr.length
      ? evenArr
          .map((n) => n * numbers[numbers.length - 1])
          .reduce((acc, cur) => acc + cur)
      : 0;
  }