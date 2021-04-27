function coolString(s) {
    //coding and coding..
    let type = ""
    if (s.match(/[\d\s]/g)) { return false }
    for (const i of s) {
      if (i === i.toLowerCase()) {
        if (type === "lower") {
          return false
        }
        type = "lower"
      } else if (i === i.toUpperCase()) {
        if (type === "upper") {
          return false
        }
        type = "upper"
      }
    }
    return true
  }