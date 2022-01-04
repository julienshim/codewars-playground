// TODO
Array.prototype.square = function() {
    return this.map(n => Math.pow(n, 2));
  }
  
Array.prototype.cube = function() {
return this.map(n => Math.pow(n, 3));
}

Array.prototype.sum = function() {
return this.reduce((a, c) => a + c, 0);
}

Array.prototype.average = function() {
return this.reduce((a, c) => a + c, 0) / this.length;
}

Array.prototype.even = function() {
return this.filter(n => n % 2 == 0);
}

Array.prototype.odd = function() {
return this.filter(n => n % 2 == 1);
}