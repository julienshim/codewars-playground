function capital(capitals){
  //...
  return capitals.map(x => `The capital of ${x.country ? x.country : x. state} is ${x.capital}`);
}
