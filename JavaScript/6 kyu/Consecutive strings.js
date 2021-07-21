function longestConsec(strarr, k) {
    // your code
    if (k > strarr.length || k <= 0) {
      return ''
    }
  
    const results = [];
    let start = 0;
    let end = start + k;
  
    while(end <= strarr.length + 1) {
      const group = strarr.slice(start,end).join("");
      results.push(group)
      start += 1;
      end = start + k;
    };
  
    const maxLength = Math.max(...results.map(s => s.length));
  
    return results.filter(n => n.length === maxLength)[0];
}