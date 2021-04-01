function mergeArrays(a, b) {
    // your code here
    const maxLength = a.length > b.length ? a.length : b.length
    const temp = [];
    for (let i = 0; i < maxLength; i += 1) {
      if(a[i]) {
        temp.push(a[i])
      }
      if(b[i]) {
        temp.push(b[i])
      }
    }
    return temp
  }