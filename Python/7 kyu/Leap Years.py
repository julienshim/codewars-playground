def isLeapYear(year):
    #your code here. Try to do it in one line.
    return  year % 400 == 0 if year % 100 == 0 else year % 4 == 0 #True/False