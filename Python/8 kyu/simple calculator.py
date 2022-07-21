def calculator(x,y,op):
    
    if op not in ["+", "-", "*", "/"] or type(x) != int or type(y) != int:
        return "unknown value"
    
    calculate = {
        '+': x + y,
        '-': x - y,
        '*': x * y,
        '/': x / y
    }
    
    return calculate[op]