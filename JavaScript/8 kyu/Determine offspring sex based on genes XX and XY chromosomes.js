function chromosomeCheck(sperm) {
  const s = {
    XX: 'daughter',
    XY: 'son'
  };
  
 return `Congratulations! You're going to have a ${s[sperm]}.`;
}