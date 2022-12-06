const orderedCount = function (text) {
  // Implement me!
  const unique = [...new Set(text.split(''))]
  const count = x => text.split('').filter(i => i === x).length;
  return unique.map(l => [l, count(l)])
}