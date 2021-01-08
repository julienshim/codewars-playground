function toCamelCase(str){
  const strArr = str.split(/-|_/gi);
  const head = strArr.slice(0,1);
  const tail = strArr.slice(1).map(x => x.slice(0,1).toUpperCase() + x.slice(1));
  return head.concat(tail).join("");
}
