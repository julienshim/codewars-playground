function superSize(num){
  return +String(num).split("").sort((a, b) => b - a).join("");
}
