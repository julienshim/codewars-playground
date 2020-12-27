function evenChars(string) {
//keep coding!
  const sArr = string.split("");
  const eArr = string.split("").filter((x, i) => i % 2 == 1);
  return string.length < 2 || string.length > 100 ? 'invalid string' : eArr;
}
