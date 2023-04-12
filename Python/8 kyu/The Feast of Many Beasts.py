def feast(beast, dish):
    # your code here
    [b, d] = list(map(lambda x: x[0] + x[len(x) - 1], [beast, dish]))
    return b == d