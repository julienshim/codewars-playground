def longest_palindrome (s):
    # Your code goes in here
    #
    r = s[::-1]
    l = 0
    m = ''
    for i in range(len(s)):
        for j in range(len(r)):
            k = 0
            n = ''
            while (i+k) < len(s) and (j+k) < len(r) and s[i+k] == r[j+k]:
                n += s[i+k]
                k = k + 1
            l = max(l, k)
            if k == l:
                m = n
    return l if m == m[::-1] else 1