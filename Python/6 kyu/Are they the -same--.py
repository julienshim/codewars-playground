def comp(array1, array2):
    # your code
    if array1 and array2 or array1 == [] and array2 ==[]:
        arr1 = sorted([pow(n, 2) for n in array1])
        arr2 = sorted(array2)
        for i in range(len(arr1)):
            if arr1[i] != arr2[i]:
                return False
        return True
    return False