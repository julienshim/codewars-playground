function validSpacing(s) {
  // write your code here
  if (s.trim() !== s) {
    return false;
  }
  if (s.match(/\s{2,}/g) !== null) {
    return false;
  }
  return true;
}