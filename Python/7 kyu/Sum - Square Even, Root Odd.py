from math import sqrt

def sum_square_even_root_odd(nums):
    # your code goes here
    return round(sum([n ** 2 if n % 2 == 0 else sqrt(n) for n in nums]), 2)
