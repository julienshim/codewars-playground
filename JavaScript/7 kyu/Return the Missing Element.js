function getMissingElement(superImportantArray){
  //TODO
  const completeSum = 9 * (9 + 1) / 2
  const missingElSum = superImportantArray.reduce((n1, n2) => n1 + n2);
  return completeSum - missingElSum;
}
