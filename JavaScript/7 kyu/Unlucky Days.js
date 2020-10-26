function unluckyDays(year){
  //your code here
  let fridayThe13ths = 0
  const friday = 5;
  for (let month = 0; month < 12; month += 1) {
    if (new Date(year, month, 13).getDay() === friday) {
      fridayThe13ths += 1
    }
  }
  return fridayThe13ths;
}
