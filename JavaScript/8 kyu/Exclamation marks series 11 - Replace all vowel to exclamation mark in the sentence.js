function replace(s){
  //coding and coding....
  const array = s.split("");
  for (let i = 0; i < array.length; i++) {
    if ((/[aeiou]/i).test(array[i])) {
      array[i] = "!";
    }
  }
  return array.join("");
}
