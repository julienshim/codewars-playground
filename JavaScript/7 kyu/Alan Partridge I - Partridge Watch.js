function part(x){

  const terms = {
    "Partridge": true,
    "PearTree": true,
    "Chat": true,
    "Dan": true,
    "Toblerone": true,
    "Lynn": true,
    "AlphaPapa": true,
    "Nomad":true,
  };
  
  const exclaimationArr = x.filter(x => terms[x]).map(x => "!");
  
  return  exclaimationArr.length ? `Mine\'s a Pint${exclaimationArr.join("")}` : 'Lynn, I\'ve pierced my foot on a spike!!';

}
