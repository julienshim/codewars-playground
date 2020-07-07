def high_and_low(numbers):
    # ...
    arr = [int(n) for n in numbers.split()]
    return f'{max(arr)} {min(arr)}'
