function oddOrEven(array) {
   //enter code here
   return array.length === 0 || array.reduce((a,b) => a + b) % 2 === 0 ? "even" : "odd";
}
