def points(games):
    total = 0
    for i in games:
        x = i.split(":")[0]
        y = i.split(":")[1]
        if x > y:
            total += 3
        elif x == y:
            total += 1
    return total
