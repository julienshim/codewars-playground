var sing = function () {
  // return the lyrics as a string ...
  const lyrics = [];
  
  function addVerse (num) {
    
    function amount (str) {
      return num > 0 ? num : `${str === 'capEnabled' ? 'N' : 'n'}o more`;
    }
    
    const action = num > 0 ? 'Take one down and pass it around' : 'Go to the store and buy some more';
    
    function setPlural (num) {
      return amount() !== num ? 's' : '';
    }
    
    function bottlesLeft() {
      if (typeof amount() === 'string') {
        return 99
      }
      if (amount() === 1) {
        return 'no more'
      }
      return amount() - 1
    }
    
    return [`${amount('capEnabled')} bottle${setPlural(1)} of beer on the wall, ${amount()} bottle${setPlural(1)} of beer.`,            
            `${action}, ${bottlesLeft()} bottle${setPlural(2)} of beer on the wall.`]
  }
  
  for (let i = 99; i >= 0; i--) {
    lyrics.push(...addVerse(i));
  }
  
  return lyrics;

}
