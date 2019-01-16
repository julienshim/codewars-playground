function decipherThis(str) {
//have fun!
  let split = str.split(" ");
  let deciphered = [];
  split.forEach(function(test) {
    let number = test.match(/\d/g).join("");
    let newTest = test.replace(number, String.fromCharCode(number));
    let splittie = newTest.split("");
    let tmp = splittie[1];
    splittie[1] = splittie[splittie.length-1];
    splittie[splittie.length-1] = tmp;
    deciphered.push(splittie.join(""));
  });
  return deciphered.join(" ");
}; 
