from re import sub

def seven_ate9(str_):
    #your code here
    return sub(r'(?<=7)(9)(?=7)', '', str_)