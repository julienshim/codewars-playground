function cake(x, y){
    const sum = y.split("").reduce((a, c, i) => {
      const s = i % 2 === 0 ? 0 : 96;
      return a + (c.charCodeAt(0) - s);
    }, 0);
    return sum < x * 0.7 ? "That was close!" : "Fire!";
  }