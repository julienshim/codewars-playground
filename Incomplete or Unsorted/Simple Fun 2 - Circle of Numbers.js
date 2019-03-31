function circleOfNumbers(n, firstNumber) {
  //coding and coding..
  let half = Math.ceil((n-1)/2)
  let opposite = half + firstNumber
  return n > opposite ? opposite : Math.abs(firstNumber - half)
}

// Simple Fun #2: Circle of Numbers
