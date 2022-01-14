function swap (string) {
    return string.split('').map(l => {
      return 'aeiou'.includes(l) ? l.toUpperCase() : l;
    }).join('');
  }