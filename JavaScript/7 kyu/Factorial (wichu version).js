function factorial(n){
  //your code here
  return n <= 1 ? 1 : n *= factorial(n-1);
}
