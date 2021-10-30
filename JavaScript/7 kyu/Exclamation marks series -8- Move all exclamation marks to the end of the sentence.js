function remove(s){
    //coding and coding....
    const matches = s.match(/!/g);
    const alphaOnly = s.replace(/!/g, '');
    return alphaOnly + (matches ? matches.join('') : '');
  }