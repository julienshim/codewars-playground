def cookie(x):
    #Good Luck
    def generate_who(s):
        return f'Who ate the last cookie? It was {s}!'
    
    if isinstance(x, str):
        return generate_who('Zach')
    
    if not isinstance(x, bool) and isinstance(x, (int, float)):
        return generate_who ('Monica')
        
    return generate_who('the dog')