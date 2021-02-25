function chuckPushUps(string) {
  //Massive, massive pecs!
  if (typeof string !== 'string' || string.length === 0) {
    return 'FAIL!!'
  }
  if (/[01]/.test(string)) {
    if (/\s/.test(string)) {
      const binaryArr = string.match(/[01]{1,}/g);
      const max = Math.max(...binaryArr);
      return parseInt(max, 2);
    }
    const binary = string.match(/[01]/g).join("");
    return parseInt(binary, 2);
  } 
  return 'CHUCK SMASH!!';
}
