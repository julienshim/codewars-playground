def remove_parentheses(s):
    string = ''
    writing = True
    count = 0
    for ltr in s:
        if ltr == '(':
            writing = False
            count += 1
        elif ltr == ')':
            if count > 1:
                count -= 1
            else:
                count -= 1
                writing = True
        elif writing:
            string += ltr

    return string
