function solve(a,b){
 //..
  const uA = [...a].filter(x => !b.includes(x));
  const uB = [...b].filter(x => !a.includes(x));
  return [...uA, ...uB].join("");
};
