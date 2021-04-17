String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  const oString = this.valueOf()
  const oStringArr = oString.split("").map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase());
  const nString = oStringArr.join("");
  return nString
}
