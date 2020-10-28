def sequence_sum(begin_number, end_number, step):
    #your code here
    return sum(n for n in range(begin_number, end_number + step, step) if n <= end_number)
