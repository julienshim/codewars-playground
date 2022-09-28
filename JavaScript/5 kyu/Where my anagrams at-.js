function anagrams(word, words) {
  const tmp = []
  
  const sorted = (w) => {
    return w.split('').sort().join('');
  }
  
  for (let w of words) {
    if (sorted(w) === sorted(word)) {
      tmp.push(w)
    }
  }
  
  return tmp
}