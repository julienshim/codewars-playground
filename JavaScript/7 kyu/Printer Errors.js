function printerError(s) {
    let error = 0;
    for (let i = 0; i < s.length; i++) {
      /([N-Zn-z])/g.test(s[i]) && error++
    }
    return `${error}/${s.length}`
}
