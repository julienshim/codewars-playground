decodeMorse = function(morseCode){
  //your code here
  const morseCodeArr = morseCode.trim().split(/\s{2,}/g);
  return morseCodeArr.map(word => {
    return word.match(/[.-]{1,}/g).map(code => MORSE_CODE[code]).join('')
  }).join(' ');
}
