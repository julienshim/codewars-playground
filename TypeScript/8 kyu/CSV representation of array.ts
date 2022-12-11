export function toCsvText(array:number[][]):string {
  return array.map(arr => arr.join(',')).join('\n'); // good luck
}