function isSortedAndHow(array) {
    const sorted = array.slice().sort((a, b) => a - b);
    const string = arr => JSON.stringify(arr);
    switch(true) {
        case string(array) === string(sorted):
          return 'yes, ascending';
          break;
        case string(array) === string(sorted.reverse()):
          return 'yes, descending';
          break;
        default:
          return 'no';
    };
  }