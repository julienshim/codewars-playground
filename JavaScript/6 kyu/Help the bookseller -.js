function stockList(listOfArt, listOfCat){
    // ...   
    
    if (!listOfArt.length) { return '' };
    
    const initialValue = listOfCat.reduce((a, c) => ({...a, [c]: 0}), {});
  
    const o = listOfArt.filter(stock => listOfCat.includes(stock[0])).reduce((a, c) => {
      const [code, quantity] = c.split(' ');
      return {...a, [code[0]]: (a[code[0]] || 0) + +quantity};
    }, initialValue);
       
    return Object.entries(o).map(entry => `(${entry.join(' : ')})`).join(' - ');
    
  }