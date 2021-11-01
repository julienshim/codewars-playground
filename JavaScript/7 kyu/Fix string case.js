function solve(s){
    //..
  const cases = {
    upper: 0,
    lower: 0,
  }
  
  for(let i = 0; i < s.length; i ++) {
    const keyValue = s[i].toUpperCase() === s[i] ? 'upper' : 'lower';
    cases[keyValue] += 1
  }
  
  return cases['upper'] > cases ['lower'] ? s.toUpperCase() : s.toLowerCase();
}