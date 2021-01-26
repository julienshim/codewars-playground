function orderWeight(strng) {
    // your code
    const strngArr = strng.split(" ");
    const nStrngSum = (nStrng) => {
      return nStrng.split("").reduce((a,b) => +a + +b, 0)
    }
    return strngArr.sort((n1, n2) => {
      if (nStrngSum(n1) !== nStrngSum(n2)) {
        return nStrngSum(n1) - nStrngSum(n2);
      }
      if (n1 > n2) { 
        return 1
      } else if (n1 < n2) {
        return -1
      }
    }).join(' ')
}
