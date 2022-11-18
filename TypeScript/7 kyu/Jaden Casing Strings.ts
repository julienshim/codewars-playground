String.prototype.toJadenCase = function () {
  // Your code here
  return this.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
}


interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
}