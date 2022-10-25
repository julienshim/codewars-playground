def incrementer(nums):
    # your code here
    return [(n + i + 1) % 10 for n, i in enumerate(nums)]