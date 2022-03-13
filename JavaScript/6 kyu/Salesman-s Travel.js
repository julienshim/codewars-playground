function travel(r, zipcode) {
    // your code
  const addressArr = r.split(',').map(a => {
    const aArr = a.split(' ');
    const stateZip = aArr.slice(-2).join(' ');
    const streetNumber = aArr[0];
    const streetCity = aArr.slice(1, -2).join(' ');
    return ({streetNumber, streetCity, stateZip});
  })
  
  const returnStringByKey = (arr, key) => arr.map(a => a[key]).join(',');
  
  const addressArrFilteredByZipcode = addressArr.filter(a => a.stateZip === zipcode);
  
  return zipcode + ':'
         + returnStringByKey(addressArrFilteredByZipcode, 'streetCity') + '/' 
         + returnStringByKey(addressArrFilteredByZipcode, 'streetNumber') 
}