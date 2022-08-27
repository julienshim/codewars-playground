def to_csv_text(array):
    stringify = lambda l: ','.join([str(n) for n in l])
    
    return '\n'.join([stringify(r) for r in array])
    # good luck
