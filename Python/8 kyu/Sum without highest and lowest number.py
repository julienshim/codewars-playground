def sum_array(arr):
    # your code here
    if not arr or len(arr) < 3:
        return 0
    return sum(arr) - max(arr) - min(arr)
