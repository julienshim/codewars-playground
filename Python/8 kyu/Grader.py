def grader(score):
    if score > 1.0 or score < 0.6:
        return 'F'
    
    scale = {
        '0.9': 'A',
        '0.8': 'B',
        '0.7': 'C',
        '0.6': 'D'
    }
    
    for s in scale:
        if score >= float(s):
            return scale[s]