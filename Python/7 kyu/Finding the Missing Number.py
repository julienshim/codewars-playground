def missing_no(nums):
    #Your code here
    n = 0
    while n < len(nums):
        if n != nums[n]:
            return n
        n += 1
    return 100