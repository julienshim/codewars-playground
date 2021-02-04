from re import findall

def uncollapse(digits):
    # Happy coding!
    return " ".join(findall("one|two|three|four|five|six|seven|eight|nine|zero", digits))
