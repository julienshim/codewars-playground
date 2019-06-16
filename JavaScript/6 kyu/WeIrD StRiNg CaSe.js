function toWeirdCase(string){
  //TODO
  return string.split(" ").map( w => {
    return w.split("").map((l, i) => {
      return i % 2 === 0 ? l.toUpperCase() : l.toLowerCase();
    }).join("");
  }).join(" ");
}
