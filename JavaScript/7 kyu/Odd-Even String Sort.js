function sortMyString(S) {
  // your code here
  const fString = (n) =>
    S.split("")
      .filter((x, i) => i % 2 === n)
      .join("");

  return [0, 1].map((x) => fString(x)).join(" ");
}
