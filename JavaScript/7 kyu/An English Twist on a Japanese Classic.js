function shiritori(words) {
  //insert code
  const firstWord = words[0]
  
  if (!firstWord) {
    return [];
  }
  
  const arr = [firstWord]
  
  for (let i = 1; i < words.length; i += 1 ) {
     const cur_beg = words[i][0];
     const prev_end = words[i-1][words[i-1].length-1];
     if ( cur_beg === prev_end ) { arr.push(words[i]) } else { break }
  }
  
  return arr;
}
