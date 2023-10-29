from math import floor

def find_slope(points):
    try:
        [a, b, c, d] = points
        return str(floor((d-b)/(c-a)))
    except ZeroDivisionError:
        return 'undefined'
