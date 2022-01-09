function alternateCase(s) {
    return [...s].map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('');
  }