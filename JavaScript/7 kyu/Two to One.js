function longest(s1, s2) {
  // your code
  let combined = [...s1.split(""), ...s2.split("")].sort();
  let longest = []
  combined.forEach(c => {
    if (/[a-z]/i.test(c) && longest.indexOf(c) === -1) {
      longest.push(c);
    }
  });
  return longest.join("");
}
