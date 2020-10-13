def is_very_even_number(n):
    if len(str(n)) > 1:
        sarr = sum([int(s) for s in str(n)], 0)
        return is_very_even_number(sarr)
    else:
        return n % 2 == 0
