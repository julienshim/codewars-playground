def arithmetic(a, b, operator):
    #your code here
    key = {
        \add\": \"+\"
        \"subtract\": \"-\"
        \"divide\": \"/\" 
        \"multiply\": \"*\"
    }
    
    return eval(f'{a} {key[operator]} b')"