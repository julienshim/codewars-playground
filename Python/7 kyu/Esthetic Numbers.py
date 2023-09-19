def esthetic(num):
    esthetic_results= []
    
    def ntb(n, b):
        if n == 0:
            return [0]
        digits = []
        while n:
            digits.append(int(n % b))
            n //= b
        return digits[::-1]
    
    for base in range(2, 11):
        tmp = ntb(num, base)
        is_based = True
        for n in range(1, len(tmp)):
            if abs(tmp[n] - tmp[n-1]) != 1:
                is_based = False
                break
                
        if is_based:
            esthetic_results.append(base)
                
    return esthetic_results
