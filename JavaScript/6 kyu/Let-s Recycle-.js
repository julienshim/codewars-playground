function recycle(array) {
  
    const output = {
      paper: [],
      glass: [],
      organic: [],
      plastic: []
    }
    
    for(const item of array) {
      if ('material' in item) {
        output[item['material']].push(item['type'])
      }
      if('secondMaterial' in item) {
        output[item['secondMaterial']].push(item['type'])
      }
    }
    
    return Object.keys(output).map(k => output[k])
    
  }