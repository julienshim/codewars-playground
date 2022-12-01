def pythagorean_triple(integers):
    integers_squared = [n ** 2 for n in integers]
    c = max(integers_squared)
    return c == sum(n for n in integers_squared if n != c)