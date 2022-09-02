from math import floor, ceil

def max_int_chain(n):
    #your code here
    if n < 5:
        return -1
    return floor( n / 2 + 1 ) * ceil( n / 2 - 1 ) # an integer max ()