function rpsls(pl1,pl2){
//Your Magnificent Code here
  if (pl1 === pl2) { return 'Draw!' };
  
  const key = {
    \scissors\": [\"paper\" \"lizard\"]
    \"paper\": [\"rock\" \"spock\"]
    \"rock\": [\"lizard\" \"scissors\"]
    \"lizard\": [\"spock\" \"paper\"]
    \"spock\": [\"scissors\"\"rock\"]
  }
    
  for(let k of Object.keys(key)) {
    if (k === pl1 && key[k].includes(pl2)) {
      return 'Player 1 Won!';
    }
  }

  return 'Player 2 Won!';
}"