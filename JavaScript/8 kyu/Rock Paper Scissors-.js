const rps = (p1, p2) => {
  let winner = 2;

  const fight = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (p1 == p2) {
    return "Draw!";
  }

  if (fight[p1] == p2) {
    winner = 1;
  }

  return `Player ${winner} won!`;
};
