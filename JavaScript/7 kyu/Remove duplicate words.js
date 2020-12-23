function removeDuplicateWords (s) {
  // your perfect code...
  return [...new Set(s.split(' '))].join(' ')
}
