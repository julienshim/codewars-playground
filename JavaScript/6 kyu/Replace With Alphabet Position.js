function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const key = {}
  for (let i = 0; i < alphabet.length; i++) {
    key[alphabet[i]] = i+1
  }
  return text.toLowerCase().split("").filter(x => alphabet.includes(x)).map(x => key[x]).join(" ")
}