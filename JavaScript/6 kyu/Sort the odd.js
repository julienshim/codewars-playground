function sortArray(array) {
  // Return a sorted array.
  const odds = array.filter( x => x % 2 === 1).sort((a, b) => a - b);
    
  for (let i = 0; i < array.length; i++) {
      array[i] = array[i] % 2 === 1 ? odds.shift() : array[i];
  }
  
  return array;
}
