function solve(s, k){
    //..
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    if (k > s.length) { return ''}

    let position = 0;
    let count = 0;
  
    while(count < k) {
      const search = alphabet[position];
      const searchIndex = s.indexOf(search);
      if(searchIndex > -1) {
        s = s.slice(0,searchIndex) + s.slice(searchIndex+1, s.length)
        count++
      }
      if(searchIndex === -1) {
        position += 1;
      }
    }
  
    return s
}
