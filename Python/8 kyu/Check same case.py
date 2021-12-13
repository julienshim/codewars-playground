def same_case(a, b): 
    # your code here
    if a.isalpha() and b.isalpha():
        if a.upper() == a and b.upper() == b:
            return 1
        if a.lower() == a and b.lower() == b:
            return 1
        return 0
    return -1