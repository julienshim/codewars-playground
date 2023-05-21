def mul_by_n(lst, n):
    print("Inputs: ", lst, n) # Check our inputs
    result = [x * n for x in lst]
    print("Result: ", result) # Check our result
    return result