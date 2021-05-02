import re

def connotation(strng):
    #have fun!
    arr = strng.lower().split()
    tf_arr = list(map(lambda x: bool(re.match('[a-m]', x)), arr))
    return tf_arr.count(True) >= tf_arr.count(False)
