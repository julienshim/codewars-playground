def correct(s):
    correction = {
        "5": "S",
        "0": "O",
        "1": "I"
    }
    for k in correction:
        s = s.replace(k, correction[k])
    return s