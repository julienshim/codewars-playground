def ordered_count(inp):
    unique = list(set(i for i in inp))
    count_list = [(i, inp.count(i)) for i in unique]
    count_list.sort(key=lambda x: inp.index(x[0]))
    return count_list