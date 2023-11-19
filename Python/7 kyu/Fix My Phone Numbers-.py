from re import findall

def is_it_a_num(s: str) -> str:
    digits = ''.join(findall(r'[0-9]', s))
    return digits if digits.startswith('0') and len(digits) == 11 else 'Not a phone number'