var coffeeLimits = function (y, m, d) {
  // Your code here
  const h = +[...arguments]
    .map((x, i) => {
      const v = String(x);
      return i > 0 ? (v.length === 2 ? v : "0" + v) : v;
    })
    .join("");

  const l = [0, 0];

  for (let i = 1; i <= 5000; i++) {
    const hex = (h + i * 0xcafe).toString(16);
    if (hex.includes("dead")) {
      l[0] = i;
      break;
    }
  }

  for (let i = 1; i <= 5000; i++) {
    const hex = (h + i * 0xdecaf).toString(16);
    if (hex.includes("dead")) {
      l[1] = i;
      break;
    }
  }

  return l;
};
