def elevator(left, right, call):
    if left == right or call == right:
        return "right"
    elif call == left:
        return "left"
    else:
        leftD = call - left if call > left else left - call
        rightD = call - right if call > right else right - call
        if leftD < rightD:
            return "left"
        else:
            return "right"
