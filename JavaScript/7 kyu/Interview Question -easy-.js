function getStrings(city){
  const cArr = city.toLowerCase().replace(/\s/g, '').split('');
  return [...new Set(cArr)].map(letter => {
    const count = cArr.filter(cletter => cletter === letter).length;
    return `${letter}:${'*'.repeat(count)}`
  }).join(',')
}
