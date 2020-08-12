def is_triangle(a, b, c):
    [h, i, j] = sorted([a, b, c])
    return h + i > j
