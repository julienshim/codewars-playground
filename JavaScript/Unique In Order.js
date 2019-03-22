var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let array = typeof iterable === "String" ? iterable.split("") : iterable;
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i-1]) {
      unique.push(array[i]);
    }
  }
  return unique;
}
