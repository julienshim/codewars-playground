function fakeBin(x){
  return [...x].map(n => n < 5 ? '0' : '1').join('')
}
