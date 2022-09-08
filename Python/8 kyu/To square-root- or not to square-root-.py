from math import sqrt, pow, isqrt

def square_or_square_root(arr):
    def square(n):
        return pow(n, 2)
    return [isqrt(n) if square(isqrt(n)) == n else square(n) for n in arr]