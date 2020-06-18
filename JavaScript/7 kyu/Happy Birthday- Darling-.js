function womensAge(n) {
  // your code here
  const age = 20 + n % 2;
  const base = Math.floor(n/2);
  return`${n}? That's just ${age}, in base ${base}!`
}
