function remove(s, n) {
  //coding and coding....
  let result = "";
  for (let c of s) {
    if (c === "!" && n > 0) {
      n--;
    } else {
      result += c;
    }
  }
  return result;
}
