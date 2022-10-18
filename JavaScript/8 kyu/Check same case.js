function sameCase(a, b){
    if ([...arguments].some((l) => /^[^A-Za-z]{1}$/.test(l))) { return -1 }
  
    for(let r of [/^[a-z]{1}$/, /^[A-Z]{1}$/]) {
      if (r.test(a) && r.test(b)) {
        return 1
      }
    }
      
    return 0
  }