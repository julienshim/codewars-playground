function wave(){
  // Code here
  let array = [];
  const stringArray = [...arguments][0];
  for (let i = 0; i < stringArray.length; i++) {
    let word = stringArray.split("");
    if (word[i] !== ' ') {
      word[i] = word[i].toUpperCase();
      array.push(word.join(""));
    }
  }
  return array;
}
