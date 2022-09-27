def find_multiples(integer, limit):
    # Your code here!
    l = list(range(integer, limit + 1))
    return list(filter(lambda n: n % integer == 0, l))