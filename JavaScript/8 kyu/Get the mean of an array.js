function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  return Math.floor(marks.reduce((a,b) => a + b) / marks.length);
}
