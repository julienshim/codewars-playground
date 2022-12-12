String.prototype.camelCase=function(){
  //your code here
  return this.split(' ').map(x => x ? x[0].toUpperCase() + x.slice(1) : '').join('')
}