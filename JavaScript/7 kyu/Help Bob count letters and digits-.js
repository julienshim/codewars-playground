function countLettersAndDigits(input) {
  // a-z rather than \w due to underscore
  const regex = /[a-z0-9]/gi;
  const arr = input.split("")
  const arrFiltered = arr.filter(x => x.match(regex));
  return arrFiltered.length;
}
