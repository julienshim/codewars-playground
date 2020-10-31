def count(array):
    #your code here
    dic = {}
    for name in array:
        if name in dic:
            dic[name] = dic[name] + 1
        else:
            dic[name] = 1
    return dic
