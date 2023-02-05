function uniTotal(string) {
  // total up dem unicodes!
  return string.split("").reduce((a, c) => a + c.charCodeAt(), 0);
}
