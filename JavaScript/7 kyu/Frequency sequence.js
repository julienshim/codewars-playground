function freqSeq(str, sep) {
    const sArr = str.split("");
    return sArr.map(a => sArr.filter(b => a === b).length).join(sep);
  }