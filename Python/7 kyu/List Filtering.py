def filter_list(l):
  'return a new list with the strings filtered out'
  return [n for n in l if type(n) == int]

# alt

# return [n for n in l if type(n) is int]
# return filter(lambda x: not type(x) is str, l)