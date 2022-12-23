export function toAlternatingCase(s: string): string {
  const oString = s.valueOf()
  const oStringArr = oString.split("").map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase());
  const nString = oStringArr.join("");
  return nString
}