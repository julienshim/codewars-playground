function vowel2index(str) {
  //code me
  return str
    .split("")
    .map((c, i) => (c.match(/[aeiou]/gi) ? i + 1 : c))
    .join("");
}
