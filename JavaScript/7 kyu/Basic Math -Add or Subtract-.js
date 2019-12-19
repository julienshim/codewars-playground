function calculate(str) {
  //your code here...
  return String(eval(str.replace(/minus/g, "-").replace(/plus/g, "+")));
}
