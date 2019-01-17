function decipherThis(str) {
//have fun!
  // Split the string into words
  let split = str.split(" ");
  // Deciphered array
  let deciphered = [];
  split.forEach(function(word) {
    let code = word.match(/\d/g).join("");
    let decoded = word.replace(code, String.fromCharCode(code));
    // Since strings are unmutable, split
    let splittie = decoded.split("");
    // Switch the second and last characters
    let tempVal = splittie[1];
    splittie[1] = splittie[splittie.length-1];
    splittie[splittie.length-1] = tempVal;
    // Push into deicphered array as word
    deciphered.push(splittie.join(""));
  });
  // Return deciphered array as string
  return deciphered.join(" ");
};
