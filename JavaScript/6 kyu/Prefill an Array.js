function prefill(n, v) {
  if (parseInt(n, 10) !== Math.abs(n)) { 
    throw new TypeError(`${n} is invalid`)
  };
  return parseInt(n, 10) ? [...new Array(n)].fill(v) : []
}
