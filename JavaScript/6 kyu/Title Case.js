function titleCase(title, minorWords) {
  const str2strArr = (string) => {
    return string ? string.toLowerCase().split(' ') : ['']
  }
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const titleArr = str2strArr(title);
  const minorWordsArr = str2strArr(minorWords);
  return titleArr.map((str, index) => {
    return minorWordsArr.includes(str) && index !== 0 ? str : capitalize(str)
  }).join(' ') || '';
}
