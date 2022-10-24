import re

def disemvowel(string_):
    return re.sub(r'[aeiouAEIOU]', '', string_)