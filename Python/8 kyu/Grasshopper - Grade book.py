def get_grade(s1, s2, s3):
    # Code here
    score = sum([s1, s2, s3]) / 3
    
    if score < 60:
        return 'F'
    if score < 70:
        return 'D'
    if score < 80:
        return 'C'
    if score < 90:
        return 'B'
    return 'A'
    