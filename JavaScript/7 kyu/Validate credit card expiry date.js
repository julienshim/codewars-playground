function checkExpiryValid (date) {
  // write your code here
  const validExp = /[\d]{2}[/][\d]{2,4}/g.test(date)
  const exp = validExp && date.split("/");
  const today = [new Date().getMonth(), new Date().getFullYear()];
  console.log("v", validExp, "e", `20${exp[1]}`, "t", today[1]);
  return exp[0] > today[0] && parseInt(`20${exp[1]}`, 10) > today[1] && validExp
}
