function arrAdder(arr) {  
    const message = [];
    
    for (let i = 0; i < arr[0].length; i++) {
      message.push(arr.map(arr => arr[i]).join(''));
    };
    
    return message.join(' ');
  }