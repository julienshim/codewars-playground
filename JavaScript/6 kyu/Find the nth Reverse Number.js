function findReverseNumber(n) {
  // your code
    let i, j;
    const nArr = [...'' + n];
    const nLength = nArr.length;
    if (nLength === 1) {
        nArr[0] -= 1;
    } else if (nArr[0] === '1' && nArr[1] === '0') {
        nArr[0] = ' '
        nArr[1] = '9';
        for (j = nLength, i = nLength - 2; i >= 1; i--, j++) {
            nArr[j] = nArr[i];
        }
    } else if (nArr[0] === '1') {
        nArr[0] = ' ';
        for (j = nLength, i = nLength - 1; i >= 1; i--, j++) {
            nArr[j] = nArr[i];
        }
    } else {
        nArr[0] -= 1;
        for (j = nLength, i = nLength - 2; i >= 0; i--, j++) {
            nArr[j] = nArr[i];
        }
    }
    return nArr.join("");
}
