def is_palindrome(s):
    sl = s.lower()
    return sl == sl[::-1]
