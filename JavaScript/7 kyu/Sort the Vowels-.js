function sortVowels(s){
  //code
  if (typeof s === "string") {
    return s.split("").map(l => l.match(/[aieou]/gi) ? `|${l}` : `${l}|`).join("\n");
  }
  return "";
}
