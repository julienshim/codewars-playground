function validateCode(code) {
  //your code here
  const re = new RegExp("^[1|2|3].*");
  return re.test(String(code));
}
