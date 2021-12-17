function trouble(x, t) {
    for(let i = 0; i < x.length - 1; i += 1) {
      const n = x[i]
      const m = x[i+1]
      if(n + m === t) {
        x.splice(i+1, 1)
        return trouble(x, t)
      }
    }
    return x
  }