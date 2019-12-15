# Create a function args_count, that returns count of passed arguments
def args_count(*arg, **kwargs):
    return len(arg) + len(kwargs);
