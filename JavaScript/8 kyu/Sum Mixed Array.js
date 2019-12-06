function sumMix(x){
  return x.map(val => parseInt(val)).reduce((acc, cur) => acc + cur);
}
