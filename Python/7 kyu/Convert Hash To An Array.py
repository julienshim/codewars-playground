def convert_hash_to_array(hash):
    #your code here - sort the keys
    list = [[k, hash[k]] for k in hash]
    list.sort()
    return list