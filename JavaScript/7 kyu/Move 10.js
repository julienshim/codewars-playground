function moveTen(s){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return [...s].map(l => {
      const moved10 = (alphabet.indexOf(l) + 10) % 26;
      return alphabet[moved10];
    }).join('');
  }