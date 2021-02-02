function topThreeWords(text) {
  const wordFreq = {};
  const arr = text.match(/[a-z]+(?:['][a-z]+)*/gi) || [];
  for (const word of arr) {
    const key = word.toLowerCase();
    if(key in wordFreq){
      wordFreq[key] = wordFreq[key] += 1;
    } else {
      wordFreq[key] = 1
    }
  }
  return [...Object.keys(wordFreq)]
            .map(key => [key, wordFreq[key]])
            .sort((pairA, pairB) => pairB[1] - pairA[1])
            .map(pair => pair[0])
            .slice(0, 3);
}
