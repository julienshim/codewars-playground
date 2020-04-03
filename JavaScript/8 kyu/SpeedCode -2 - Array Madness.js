function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  const square = a.reduce((a, b) => a + b**2, 0)
  const cube = b.reduce((a, b) => a + b**3, 0)
  return square > cube
}