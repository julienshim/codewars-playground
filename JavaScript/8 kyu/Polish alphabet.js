function correctPolishLetters (string) {
    // your code
    const key = {
      "ą": "a",
      "ć": "c",
      "ę": "e",
      "ł": "l",
      "ń": "n",
      "ó": "o",
      "ś": "s",
      "ź": "z",
      "ż": "z"
    };
    
    let newString = ''
    
    for (let l of string) {
        newString += l in key ? key[l] : l;
    }
  
    return newString
  }