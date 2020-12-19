 function filterHomogenous(arrays) {
  // Alea iacta est, code legionary!
  return arrays.filter(arr => {
    return new Set(arr.map(e => typeof e)).size === 1;
  });
}
