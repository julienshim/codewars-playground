from math import ceil

def odd_count(n):
    isOdd = n % 2 == 1
    total = (n - 1) / 2
    return total if isOdd else ceil(total);
