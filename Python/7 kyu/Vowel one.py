def vowel_one(s):
    return ''.join('1' if l.lower() in 'aeiou' else '0' for l in s)