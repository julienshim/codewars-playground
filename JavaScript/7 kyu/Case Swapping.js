function swap(str){
    //code me
    return str.split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('');
  }