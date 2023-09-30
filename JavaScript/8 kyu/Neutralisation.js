function neutralise(s1, s2) {
  // Here be dragons!
  let p = 0;
  let res = "";
  while (p < s1.length) {
    if (s1[p] + [s2[p]] == "++") {
      res += "+";
    } else if (s1[p] + [s2[p]] == "--") {
      res += "-";
    } else {
      res += "0";
    }
    p++;
  }
  return res;
}
