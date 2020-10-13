def rps(p1, p2):
    # your code here    # your code here
    winner = 2

    fight = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock"
    }

    if p1 == p2:
        return "Draw!"
    elif fight[p1] == p2:
        winner = 1

    return f"Player {winner} won!"
