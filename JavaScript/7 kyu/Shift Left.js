function shiftLeft(s, t){
  // your code here
  let i = s.length;
  let j = t.length;
  while (i >= 0 && j >= 0 && s[i] === t[j]) {
    i--;
    j--;
  }
  return i + j + arguments.length
}
