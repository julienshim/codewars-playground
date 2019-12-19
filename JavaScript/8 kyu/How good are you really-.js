function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}
