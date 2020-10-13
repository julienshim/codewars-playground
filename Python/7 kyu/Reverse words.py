def reverse_words(text):
    # go for it
    space = '  ' if '  ' in text else ' '
    return space.join([s[::-1] for s in text.split()])
