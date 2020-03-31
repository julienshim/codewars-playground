def capitalize(s):
    capitalize = ""
    reverse = ""
    for x in range(0, len(s)):
        if x % 2 == 0:
            capitalize += s[x].upper()
            reverse += s[x]
        else:
            capitalize += s[x]
            reverse += s[x].upper()
    return [capitalize, reverse]
