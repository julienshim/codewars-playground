export function camelCase(str: string): string {
  return str.split(' ').map((x: string) => x ? x[0].toUpperCase() + x.slice(1) : '').join(''); // your code here
}