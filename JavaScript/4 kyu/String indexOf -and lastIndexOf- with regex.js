String.prototype.indexOf = function(){
    // ...
    const [str, n = 0] = [...arguments];
    const reg = new RegExp(str,'g');
    reg.lastIndex = n;
    var match = reg.exec(this)
    return match ? match.index : -1; 
  };
  
  String.prototype.lastIndexOf = function(){
    // ...
    const [str, n = this.length] = [...arguments];
    const reg = new RegExp(str,'g')
    let index = -1;
    while (true) {
      const match = reg.exec(this);
      if (!match || match.index > n) { return index };
      index = match.index;
      reg.lastIndex = match.index + 1;
    }
  };