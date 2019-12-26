function cleanString(s) {
	//... your code ...
  let cleanString = s;
  while (cleanString.includes("#")) {
    const hashIndex = cleanString.indexOf("#");
    const preBackspace = hashIndex > 0 ? cleanString.slice(0, hashIndex-1) : "";
    const postBackspace = cleanString.slice(hashIndex+1);
    cleanString = preBackspace + postBackspace;
  };
  return cleanString.length > 0 ? cleanString : "";
};