def camel_case(string):
    #your code here
    return ''.join(s.capitalize() for s in string.split())