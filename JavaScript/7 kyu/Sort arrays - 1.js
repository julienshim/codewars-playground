// input: names - unsorted array
// output: sorted array
sortme = function( names ){
    return names.sort((n1, n2) => {
      if (n1 > n2) {
        return 1
      }
      if (n1 < n2) {
        return -1
      }
      return 0
    })
  }