def create_phone_number(n):
    # your code here
    def stringify(arr):
        return ''.join(str(n) for n in arr)
    areaCode = stringify(n[0:3])
    officeCode = stringify(n[3:6])
    lineNumber = stringify(n[6:10])
    return f'({areaCode}) {officeCode}-{lineNumber}'

# alt
# def create_phone_number(n):
#    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)
