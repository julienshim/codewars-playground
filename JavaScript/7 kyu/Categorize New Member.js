function openOrSenior(data){
  // ...
  return data.map(member => member[0] >= 55 && member[1] > 7 ? "Senior" : "Open");
}
