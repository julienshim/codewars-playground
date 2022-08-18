def sum_no_duplicates(l):
    # write your solution here
    return sum(u if l.count(u) == 1 else 0 for u in l)
