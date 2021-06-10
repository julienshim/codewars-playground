function inArray(array1,array2){
  //...
  return array1.filter(a => array2.some(b => b.includes(a))).sort()
} 
