def basic_op(operator, value1, value2):
    switcher = {
        '+': value1 + value2,
        '-': value1 - value2,
        '*': value1 * value2,
        '/': value1 / value2,
    }

    return switcher.get(operator, "Invalid Operator")
