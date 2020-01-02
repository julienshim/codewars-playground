function absentVowel(x){
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowels.length; i++) {
      if (!x.includes(vowels[i])) {
        return i;
      }
    }
  }