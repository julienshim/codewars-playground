function solve(arr){  
//code
  const key = Object.assign({}, "abcdefghijklmnopqrstuvwxyz");
  return arr.map(string => {
    return [...string.toLowerCase()].filter((letter, index) => key[index] === letter).length;
  })
};
