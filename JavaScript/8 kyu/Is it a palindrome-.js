function isPalindrome(x) {
  // your code here
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}