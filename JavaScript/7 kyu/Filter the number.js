var FilterString = function(value) {
  return +value.match(/\d/g).join('');
}
