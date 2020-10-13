def first_non_consecutive(arr):
    # your code here
    consec = arr[0]
    for num in arr:
        if num != consec:
            return(num)
        consec += 1
    return None
