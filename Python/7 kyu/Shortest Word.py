def find_short(s):
    # your code here
    return min(map(len, (s.split(' ')))) # l: shortest word length