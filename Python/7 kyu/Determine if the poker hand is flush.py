from re import match

def is_flush(cards):
    # Write your code in here!
    return all(map(lambda x: x.endswith(cards[0][-1]), cards))