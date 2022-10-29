from re import match

def validate_usr(username):
    print(username)
    #your code here
    u_reg = r'^[a-z_0-9]{4,16}$'
    return match(u_reg, username) != None