String.prototype.toJadenCase = function () {
  //...
  let array = this.split(" ");
  for (let i = 0; i < array.length; i++) {
    let capitalize = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    array[i] = capitalize;
  }
  return array.join(" ");
};
