def lowercase_count(strng):
    # Your code here
    return [s.lower() == s and s.isalpha() for s in strng].count(True)
