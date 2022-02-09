const vowels = [...'aeiou'];

function encode(string) {
  return string.split('').map(s => {
    return vowels.includes(s) ? (vowels.indexOf(s) + 1) : s;
  }).join('');
}

function decode(string) {
  return string.split('').map(s => {
    return !isNaN(s) ? vowels[+s-1] : s;
  }).join('');
};