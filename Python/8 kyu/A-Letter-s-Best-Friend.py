from re import findall

def best_friend(txt, a, b):
    for i,l in enumerate(txt):
      try:
         if l == a and txt[i+1] != b:
            return False
      except IndexError:
            return False
        
    return True
