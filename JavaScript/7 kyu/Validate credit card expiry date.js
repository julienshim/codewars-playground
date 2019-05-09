function checkExpiryValid (date) {
  // write your code here
  const validExp = /[\d]{2}[/][\d]{2,4}/g.test(date)
  const exp = validExp && date.split("/");
  const today = [new Date().getMonth(), new Date().getFullYear()];
  const formatYear = `${exp[1]}`.length === 2 ? '20' : '';
  const expYear = parseInt(`${formatYear}${exp[1]}`, 10);
  const expMonth = parseInt(exp[0], 10)
  return expYear + expMonth > today[0] + today[1] && expYear >= today[1] && validExp
}
