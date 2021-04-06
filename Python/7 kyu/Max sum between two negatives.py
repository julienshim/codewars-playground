def max_sum_between_two_negatives(arr):
    nArr = [i for i, n in enumerate(arr) if n < 0]
    sums = [sum(arr[(n+1):nArr[i+1]]) for i,n in enumerate(nArr) if i + 1 < len(nArr)]
    return max(sums) if sums else -1