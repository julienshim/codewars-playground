def multi_table(number):
    return '\n'.join([f"{i+1} * {number} = {(i+1) * number}" for (i, j) in enumerate(list(range(10)))])
