function problem(x){
    //your code here
    return [x * 50 + 6, 'Error'][typeof x === 'number' ? 0 : 1]
  }