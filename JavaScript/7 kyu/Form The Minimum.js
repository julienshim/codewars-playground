function minValue(values){
  //your code here
  const uniqueArr = [];
  values.sort((a, b) => a - b).forEach(x => {
    if (uniqueArr.indexOf(x) === -1) { uniqueArr.push(x) };
  });
  return Number(uniqueArr.join(""));
}
