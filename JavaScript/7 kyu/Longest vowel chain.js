function solve(s){
 return Math.max(...s.match(/[aioeu]{1,}/gi).map(s => s.length))
}
