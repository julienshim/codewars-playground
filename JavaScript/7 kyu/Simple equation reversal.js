function solve(eq){
    //..
  let result = '';
  const n = /[+-\/*]/g;
  const nArrRev = eq.match(n).reverse();
  const eqRev = eq.replace(n, ' ').split(' ').reverse();
  for (let i = 0; i < Math.max(nArrRev.length, eqRev.length); i += 1) {
    if (eqRev[i]) {
      result += eqRev[i];
    };
    if (nArrRev[i]) {
      result += nArrRev[i];
    };
  };
  return result;
}