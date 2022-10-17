function vowelOne(s){
    // ...
    return s.toLowerCase().split('').map(l => 'aeiou'.includes(l) ? '1': '0').join('')
  }