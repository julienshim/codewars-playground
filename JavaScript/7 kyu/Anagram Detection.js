// write the function isAnagram
var isAnagram = function(test, original) {
  
  function shorted(str) {
    return str.toLowerCase().split('').sort().join()
  }
  
  return shorted(test) === shorted(original)
};
