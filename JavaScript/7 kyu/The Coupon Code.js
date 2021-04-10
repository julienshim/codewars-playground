function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const codeMatch = enteredCode === correctCode;
  const stillValid = new Date(currentDate) <= new Date(expirationDate);
  return codeMatch && stillValid
}
