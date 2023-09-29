function duckDuckGoose(players, goose) {
  // ...
  const n =
    goose % players.length === 0
      ? players.length - 1
      : (goose % players.length) - 1;
  return players[n].name;
}
