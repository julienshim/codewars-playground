def find_smallest(numbers,to_return):
    # Enter your code here!
    min_n = min(numbers)
    if to_return == "value":
        return min_n
    if to_return == "index":
        return numbers.index(min_n)