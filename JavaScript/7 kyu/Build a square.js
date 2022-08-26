function generateShape(integer){
    const base = [...Array(integer).keys()];
    
    const plusify = (i) => base.map(x => '+').join('');
    
    return base.map(x => plusify(integer)).join('\n');
  }
  