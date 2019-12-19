function divisibleByThree(str){
  return str.split("").map( n => Number(n)).reduce((a,b) => a + b) % 3 === 0;
}
