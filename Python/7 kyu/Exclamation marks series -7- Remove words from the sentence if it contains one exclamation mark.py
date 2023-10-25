def remove(s):
    return ' '.join(list(filter(lambda x: x.count('!') != 1, s.split(' '))))