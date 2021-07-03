def some_but_not_all(seq, pred): 
    # your code here
    results = [True if pred(item) else False for item in seq]
    return True in results and results.count(True) < len(results)
