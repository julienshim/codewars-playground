function find(needle, haystack){
    const needleRegExp = new RegExp(needle.replace(/[^a-z0-9-]/gi,'.'))
    return haystack.search(needleRegExp)
  }