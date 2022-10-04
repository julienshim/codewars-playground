Array.prototype.countSheep = function() {
  return this.filter(i => i).length
}

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.countSheep()
}