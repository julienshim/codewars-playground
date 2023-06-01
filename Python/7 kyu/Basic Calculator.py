def calculate(num1, operation, num2): 
    # your code here
    if operation not in ['+', '-', '/', '*']:
        return None
    try:
        return eval(f'{num1} {operation} {num2}')
    except ZeroDivisionError:
        return None