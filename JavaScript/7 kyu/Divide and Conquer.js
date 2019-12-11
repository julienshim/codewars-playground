function divCon(x){
    const strings = sum("string", x);
    const numbers = sum("number", x);
    return numbers - strings;
}

function sum(type, arr) {
  return arr.filter(x => typeof x === type).reduce((a, b) => {
    const curr = type == "string" ? +b : b;
    return a + curr;
  }, 0);
}
