def to_alternating_case(string):
    return ''.join(s.upper() if s == s.lower() else s.lower() for s in string)