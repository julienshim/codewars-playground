def remove(st, n):
    result = ''
    
    for c in st:
        if c == '!' and n > 0:
            n -= 1
        else:
            result += c
            
    return result