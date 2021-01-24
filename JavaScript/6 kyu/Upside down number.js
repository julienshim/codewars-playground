function solve(x, y) {
 //..
  const upsideDown = {
    1: 1,
    6: 9,
    8: 8,
    9: 6,
    0: 0
  }
  
  const arr = Array
                .from(Array(y).keys()).slice(x)
                .filter(number => {
                    const reverse = [...`${number}`]
                                      .map(n => upsideDown[n])
                                      .reverse()
                                      .join("")
                  return number === +reverse
                })
  return arr.length
};
