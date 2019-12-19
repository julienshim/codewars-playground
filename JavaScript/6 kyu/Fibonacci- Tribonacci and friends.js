function Xbonacci(signature,n){
  //your code here
  if (signature.length > n) { return signature.slice(0, n) };
  
  let position = 0;
  
  while(signature.length < n) {
    signature.push(signature.slice(position).reduce((a, b) => a+b));
    position++;
  }
  
  return signature;
}
