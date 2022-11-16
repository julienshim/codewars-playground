def to_jaden_case(string):
    # ...
    arr = string.split(' ')
    arr = [word.capitalize() for word in arr]
    return ' '.join(arr)