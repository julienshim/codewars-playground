def absent_vowel(x): 
    # your code here
    return [i for i,n in enumerate("aeiou") if n not in x][0]
