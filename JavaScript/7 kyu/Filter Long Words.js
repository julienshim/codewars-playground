function filterLongWords(sentence, n) {
    //Solution here
    return sentence.split(' ').filter(w => w.length > n);
  }