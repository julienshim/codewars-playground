from re import match, IGNORECASE

def vowel_2_index(string):
#     pass #your code here
    return ''.join([str(i + 1) if match(r'[aeiou]', l, IGNORECASE) else l for i, l in enumerate(string)])