function containAllRots(strng, arr) {
  // your code
  for (let i = 0; i < strng.length; i++) {
    strng = strng.slice(1) + strng[0];
    if (!arr.includes(strng)) {
      return false;
    }
  }

  return true;
}
