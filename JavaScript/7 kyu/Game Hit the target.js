const solution = mtrx => {
 // code here 
  for(const m of mtrx) {
    if(
       m.indexOf('>') < m.indexOf('x')
         && m.includes('>')
         && m.includes('x')
      ) {
      return true
    }
  }
  return false
}
