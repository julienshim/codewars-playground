function createPhoneNumber(numbers){
  const areaCode = numbers.splice(0, 3).join("");
  const officeCode = numbers.splice(0, 3).join("");
  const lineNumber = numbers.join("");
  return `(${areaCode}) ${officeCode}-${lineNumber}`;
}
