function scale(strng, k, n) {
    // your code
  const arr = strng.split("\n");
 
  const arrKN = arr.map(s => {
    const tmp = [...s].map(l => l.repeat(k)).join("");
    return [...' '.repeat(n)].map(x => tmp).join("\n");
  }).join("\n").trim();
  
  return arrKN
}