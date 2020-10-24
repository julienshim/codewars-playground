function uglifyWord(s) {
  // your code here
  let ugly = "";
  let up = true;

  for (let i = 0; i < s.length; i += 1) {
    if (!!s[i].match(/[a-z]/gi)) {
      ugly += up ? s[i].toUpperCase() : s[i].toLowerCase();
      up = !up;
    } else {
      ugly += s[i];
      up = true;
    }
  }
  
  return ugly;
}
