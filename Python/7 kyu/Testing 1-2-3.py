def number(lines):
    #your code here
    return [f"{i+1}: {n}" for (i, n) in enumerate(lines)] if lines else []
