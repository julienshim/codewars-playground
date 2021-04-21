
function wordToBin(str){
  //code away!!!
  return str.split("").map(letter => `0${letter.charCodeAt(0).toString(2)}`);
}
