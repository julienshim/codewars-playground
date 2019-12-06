function planeSeat(a){

  const num = a.match(/\d+/g);
  const alpha = a.match(/[a-k]+/gi);
  let numPos = undefined;
  let alphaPos = undefined;

  switch (true) {
    case num <= 0:
      break;
    case num <= 20:
      numPos = "Front";
      break;
    case num <= 40:
      numPos = "Middle";
      break;
    case num <= 60:
      numPos = "Back";
      break;
    default: break;
  }

  switch (true) {
    case /[a-c]/gi.test(alpha):
      alphaPos = "Left";
      break;
    case /[d-f]/gi.test(alpha):
      alphaPos = "Middle";
      break;
    case /[ghk]/gi.test(alpha):
      alphaPos = "Right";
      break;
    default: break;
  }

  return numPos && alphaPos ? `${numPos}-${alphaPos}` : "No Seat!!";

}
