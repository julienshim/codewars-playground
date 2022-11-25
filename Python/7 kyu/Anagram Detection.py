# write the function is_anagram
def is_anagram(test, original):
    def shorted(s):
        return sorted([l for l in s.lower()])
    return shorted(test) == shorted(original)