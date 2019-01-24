function towerBuilder(nFloors) {
  // build here
  let base = nFloors * 2 - 1;
  console.log("base", base);
  let stairs = [];

  for (let i = 0; i <= base; i = i + 2) {
    let stars = [];
    for (let j = 0; j <= i; j++) {
      stars.push("*");
    }
    for (let k = base - i; k > 2; k = k - 2) {
      stars.push(" ");
      stars.unshift(" ");
    }
    stairs.push(stars.join(""));
  }
  return stairs;
}
