def descending_order(num):
    # Bust a move right here
    arr = sorted([s for s in str(num)])[::-1]
    return int(''.join(arr))
