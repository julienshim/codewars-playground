function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  // your code
  return Math.floor(Math.sqrt([...arguments].map(x => Math.pow(x, 2)).reduce((a,b) => a + b))/2);
}
