function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a,b) => {
    const as = a.split(" ")[1];
    const bs = b.split(" ")[1];
    if (as > bs) {
      return 1
    } else if (bs > as ) {
      return -1
    }
    return 0
  })
}
