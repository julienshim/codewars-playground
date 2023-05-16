def solution(value):
    
    def generate_leading_zeros():
        value_len = len(str(value))
        return (5 - value_len) * '0'
    
    return f'Value is {generate_leading_zeros()}{str(value)}'