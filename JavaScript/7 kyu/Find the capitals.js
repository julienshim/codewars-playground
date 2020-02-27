var capitals = function (word) {
	// Write your code here
  const positions = [];
  for (let i = 0; i < word.length; i++) {
    if (/[A-Z]/.test(word[i])) {
      positions.push(i);
    }
  }
  return positions;
};
