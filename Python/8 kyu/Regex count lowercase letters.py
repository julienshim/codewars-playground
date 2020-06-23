# def lowercase_count(strng):
#     # Your code here
#     return [s.lower() == s and s.isalpha() for s in strng].count(True) # could be changed to islower

# proper regex version

import re

def lowercase_count(strng):
    # Your code here
    return len(re.findall('[a-z]', strng))
