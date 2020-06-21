function solution(str){
  return str ? (str + "_").match(/../g) : [];
}

// solve 2
// function solution(str){
//   const even = str.length % 2 === 0 ? str : str += '_';
//   return str ? str.match(/[a-z_]{2,2}/gi) : [];
// }