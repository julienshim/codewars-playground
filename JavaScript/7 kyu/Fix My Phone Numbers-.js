function isItANum(str) {
  // your code here;
  const digits = [...str.matchAll(/[0-9]/g)].join("");
  return digits.startsWith("0") && digits.length === 11
    ? digits
    : "Not a phone number";
}
