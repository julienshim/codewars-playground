function convertHashToArray(hash) {
  //your code here - sort the keys!
  const tmp = [];
  for (let key in hash) {
    tmp.push([key, hash[key]]);
  }
  return tmp.sort();
}
