function isFlush(cards) {
  return cards.every((x) => x[x.length - 1] === cards[0][cards[0].length - 1]);
}
