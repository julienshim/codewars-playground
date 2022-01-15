def unique(integers):
    seen = {}
    output = []
    for n in integers:
        if not n in seen:
            output.append(n)
            seen[n] = True
    return output