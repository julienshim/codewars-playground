def count_positives_sum_negatives(arr):
    # your code here
    pos = 0
    neg = 0

    if not arr:
        return []

    for n in arr:
        if n > 0:
            pos += 1
        elif n < 0:
            neg += n

    return [pos, neg]
