var maxRedigit = function(num) {
    // Do yor magic :)
    let highest = null;
    if (num > 1 && `${num}`.length === 3) {
      highest = +`${num}`.split('').sort((a,b) => b-a).join('');
    }
    return highest;
  };