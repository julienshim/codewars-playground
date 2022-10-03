String.prototype.count = function(letter) {
  return this.split('').filter(l => l === letter).length;
}

function firstNonRepeatingLetter(s) {
  // Add your code here
  
  for(let letter of s) {
    if (s.toLowerCase().count(letter.toLowerCase()) === 1) {
      return letter
    }
  }
  
  return ''
}