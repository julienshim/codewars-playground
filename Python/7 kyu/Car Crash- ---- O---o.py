# The speeding car: "O='`o"
# The other cars: "X"
import re

def car_crash(road):
    re_car_crash = r'O=\'`o {0,}X'
    return bool(re.search(re_car_crash, road))