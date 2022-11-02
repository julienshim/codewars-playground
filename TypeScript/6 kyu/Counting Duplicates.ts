export function duplicateCount(text: string): number{
    //...
    let duplicates = 0;
    let store: {[key: string]: number} = {};
    for (let i = 0; i < text.length; i++) {
      let lc = String(text[i]) ? text[i].toLowerCase() : text[i];
      if (store[lc] === undefined) {
        store[lc] = 1;
      } else {
        store[lc]++
      }
    }
    for (let i in store) {
      if (store[i] > 1) {
        duplicates++;
      }
    }
    return duplicates;
  }