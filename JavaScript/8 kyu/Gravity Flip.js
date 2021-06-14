const flip = (d, a) => {
  //TODO
  return a.sort((a, b) => {
    if (d === "R") {
      return a - b;
    }
    if (d === "L") {
      return b - a;
    }
  });
};
