function duplicateEncode(word){
    // ...
    let par = [];
    let store = {};
    let array = word.split("");
    array.forEach(function(c){
      if (store[c] === undefined) {
        store[c.toLowerCase()] = 1;
      } else {
        store[c.toLowerCase()]++;
      }
    });
    for (let i = 0; i < word.length; i++) {
      let char = word[i].toLowerCase();
      par.push(store[char] > 1 ? ")" : "(");
    }
    return par.join("");
}
