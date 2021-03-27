function reverseNumber(n) {
  // ...
  if (String(n).includes("-")) {
    return +String(n * -1).split("").reverse().join("")*-1
  }
  return +String(n).split("").reverse().join("")
}
