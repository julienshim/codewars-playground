def middle_me(N, X, Y): 
    # your code here
    if N % 2 == 1:
        return X
    h = Y * int(N/2)
    return h + X + h
