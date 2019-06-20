function dirReduc(arr){
  // ...
  const match = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
  }
  
  let reduction = [];
  
  arr.forEach( dir => {
    match[dir] === reduction[reduction.length-1] ? reduction.pop() : reduction.push(dir)
  })
  
  return reduction
  
}
