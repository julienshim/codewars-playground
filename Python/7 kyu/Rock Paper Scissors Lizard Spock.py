def rpsls(pl1, pl2):
    # Your Magnificent Code here
    if pl1 == pl2:
            return 'Draw!'
  
    key = {
        \scissors\": [\"paper\" \"lizard\"]
        \"paper\": [\"rock\" \"spock\"]
        \"rock\": [\"lizard\" \"scissors\"]
        \"lizard\": [\"spock\" \"paper\"]
        \"spock\": [\"scissors\"\"rock\"]
    }
    
    for k in key.keys():
        if k == pl1 and pl2 in key[k]:
            return 'Player 1 Won!';


    return 'Player 2 Won!';
"