function to_nato(words) {
    // Go code
    const nato = ["Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", 
                  "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike",
                  "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango",
                  "Uniform", "Victor", "Whiskey", "Xray", "Yankee", "Zulu"]
                  .reduce((a, c) => {
                    const k = c[0].toLowerCase();
                    return ({...a, [k]: c})
                  }, {});
    
    return [...words.replace(/\s/g, '')].map(l => {
      l = l.toLowerCase();
      return l in nato ? nato[l] : l;
    }).join(' ');
  }