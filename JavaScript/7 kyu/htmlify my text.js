function htmlify(string) {
  //remember to use the following link to use (copy and paste) the exact punctuation mark
  //with the exact html code
  //https://www.utexas.edu/learn/html/spchar.html
  const charKey = {
    "&": "&amp;",
    "–": "&ndash;",
    "’": "&rsquo;",
    "“": "&ldquo;",
    "”": "&rdquo;",
  };
  for (let char in charKey) {
    const reg = new RegExp(char, "g");
    string = string.replace(reg, charKey[char]);
  }
  return `<p>${string}</p>`; //formatted string
}
