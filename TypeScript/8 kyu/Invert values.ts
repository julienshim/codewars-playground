export function invert(array: number[]): number[] {
   return array ? array.map(x => x * -1) : [];
}