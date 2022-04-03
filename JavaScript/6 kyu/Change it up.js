function changer(str) { 
    // happy coding!
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const caseify = (s) => s.match(/[aeiou]/) ? s.toUpperCase() : s;
    return [...str.toLowerCase()].map(s => {
      if (alphabet.includes(s)) {
        return caseify(alphabet[(alphabet.indexOf(s) + 1) % alphabet.length]);
      };
      return s;
    }).join('');    
  }