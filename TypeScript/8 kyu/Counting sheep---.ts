export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  // your code here
  return arrayOfSheep.filter(x => x).length;
}