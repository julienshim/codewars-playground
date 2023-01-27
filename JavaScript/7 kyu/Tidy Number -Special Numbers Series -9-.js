function tidyNumber(n) {
  //your code here
  const nString = String(n).split("");
  for (let i = 1; i < nString.length; i += 1) {
    if (nString[i] < nString[i - 1]) {
      return false;
    }
  }
  return true;
}
