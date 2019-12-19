function remove(s){
  //coding and coding....
  return s.slice(0, s[s.length-1] === "!" ? s.length-1 : s.length);
}
