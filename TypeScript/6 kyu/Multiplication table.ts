export function multiplicationTable (size: number): number[][] {
  // Implement me! :)
  const ref = [...Array(size).keys()].map(x => x + 1);
  return [...ref].map((x, i) => {
     return [...ref].map(n => n * (i + 1));
  });
}