function n00bify(str) {
  
    let newStr = str
    
    const convert = {
      "Too": "2",
      "to": "2",
      'TO': "2",
      "To": "2",
      "be": "b",
      "Be": "B",
      "fore": "4",
      "FORE": "4",
      "for": "4",
      "oo": "00",
      "Oo": "00",
      "are": "r",
      "you": "u",
      "You": "u",
      "please": "plz",
      "people": "ppl",
      "really": "rly",
      "have": "haz",
      "know": "no",
      "s": "z",
      "S": "Z",
      ".": "",
      ",": "",
      "'": ""
    }
    
    // why is replaceAll not allowed?
    
    for (const key in convert) {
        while(newStr.includes(key)) {
          newStr = newStr.replace(key, convert[key]);
        }
    }
    
    if (newStr[0].toLowerCase() === 'w') {
      newStr = 'LOL ' + newStr;
    }
    
    if (newStr.replace('!', '').length >= 32) {
      newStr = newStr.slice(0,3) === 'LOL' ? newStr.replace('LOL', 'LOL OMG') : 'OMG ' + newStr;
    }
    
    newStr = newStr.split(" ").map((x,i) =>  i % 2 == 1 ? x.toUpperCase() : x).join(" ");
    
    if(newStr.includes('?')) {
      const question = [...new Array(newStr.split(" ").length)].map(x => '?').join("");
      while(newStr.includes('?')) {
        newStr = newStr.replace('?', '-')
      }
      while(newStr.includes('-')) {
        newStr = newStr.replace('-', question)
      }
    }
    
    if(newStr.includes('!')) {
      const exclamation = [...new Array(newStr.split(" ").length)].map((x, i) => i % 2 === 0 ? '!' : '1').join("");
      while(newStr.includes('!')) {
        newStr = newStr.replace('!', '-')
      }
      while(newStr.includes('-')) {
        newStr = newStr.replace('-', exclamation)
      }
    }
    
    newStr = newStr[0].toLowerCase() === 'h' ? newStr.toUpperCase() : newStr;
    
    return newStr;
    
  }