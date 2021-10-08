const comfortable_word = word => {
  // TODO: complete
  const right = ["y", "u", "i", "o", "p", "h", 
                 "j", "k", "l", "n", "m"]
  
  for (let i = 1; i < word.length; i += 1) {
    if (right.includes(word[i]) == right.includes(word[i-1])) {
      return false;
    }
  }
    
  return true
};
