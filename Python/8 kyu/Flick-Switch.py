def flick_switch(lst):
    state = True
    result = []
    for i in lst:
        if i in ['flick']:
            state = not state
            result.append(state)
        else:
            result.append(state)
    return result
