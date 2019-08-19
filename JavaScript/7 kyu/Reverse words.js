function reverseWords(str) {
  // Go for it
  return str.split(" ").map(x => x.split("").reverse().join("")).join(" ");
}
