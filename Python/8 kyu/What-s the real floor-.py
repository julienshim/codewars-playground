def get_real_floor(n):
    # code here
    r = 0
    if n > 0:
        r = n - (1 if n <= 13 else 2)
    if n < 0:
        r = n
    return r
