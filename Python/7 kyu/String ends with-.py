def solution(string, ending):
    # your code here...
    return string[len(string)-len(ending):] == ending
    
# alt
  # return string.endswith(ending)
