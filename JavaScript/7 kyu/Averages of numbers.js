function averages(numbers) {
  if (numbers) {
    return numbers.map((n,i) => {
        return (numbers[i] + numbers[i+1]) / 2
      }).slice(0, numbers.length-1)
  }
  return []
}
