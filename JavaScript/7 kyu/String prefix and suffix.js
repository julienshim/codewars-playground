function solve(s){  
    //..
    const split = Math.floor(s.length/2);
    const offset = s.length % 2 === 0 ? 0 : 1;
    let prefix = s.slice(0, split);
    let suffix = s.slice(split + offset);
    while(prefix !== suffix) {
      prefix = prefix.slice(0, prefix.length-1);
      suffix = suffix.slice(1);
    }
    return prefix.length;
}
