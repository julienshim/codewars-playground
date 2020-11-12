var gimme = function (x) {
  // Implement this function
  const middle = x.slice(0).sort((a,b) => a-b)[1];
  return x.indexOf(middle)
};
