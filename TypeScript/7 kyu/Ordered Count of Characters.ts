export function orderedCount(text: string): [string, number][] {
  // Implement me! :)
  const unique = [...new Set(text.split(''))]
  const count = (x: string) => text.split('').filter(i => i === x).length;
  return unique.map(l => [l, count(l)])
}