def sum_mul(n, m):
    if n <= 0 or m <=0:
        return 'INVALID'
    
    i = 1
    s = 0
    
    while((i * n) < m):
        s += i * n
        i += 1
        
    return s