def get_size(w,h,d):
    #your code here
    v = w * h * d;
    a = 2 * (w * h + h * d + w * d);
    return [a, v]