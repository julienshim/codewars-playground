function menFromBoys(arr){
  //your code here
  const unique = Array.from(new Set(arr))
  const men = separate(unique, 0, true);
  const boys = separate(unique, 1, false);
  function separate(arr, int, isRev) {
    return arr.filter(x => Math.abs(x % 2) === int).sort((a, b) => isRev ? a - b : b - a);
  }
  return [...men, ... boys]
}
