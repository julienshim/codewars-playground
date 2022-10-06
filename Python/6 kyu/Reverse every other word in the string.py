from re import split
def reverse_alternate(string):
  #your code here
  return ' '.join([w if i % 2 == 0 else w[::-1] for i, w in enumerate(split(r'\\s{1,}', string.strip()))])