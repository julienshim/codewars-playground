function maxNumber(n){
  //your code here
  return +String(n).split("").sort((a,b) => b-a).join("")
}
