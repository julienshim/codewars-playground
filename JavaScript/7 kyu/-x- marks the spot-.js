const xMarksTheSpot = (input) => {
    // if empty input return []
    if (!input.length) return [];
    
    // if none or multiple x return []
    const xArr = input.map((arr, index) => arr.filter(item => item === 'x').length === 1 && index).filter(i => i !== false);
    if (xArr.length !== 1) return [];
    return [xArr[0], input[xArr[0]].indexOf('x')]
  }