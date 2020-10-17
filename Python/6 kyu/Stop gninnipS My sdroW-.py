def spin_words(sentence):
    # Your code goes here
    arr = sentence.split(" ")
    spinArr = [word[::-1] if len(word) >= 5 else word for word in arr]
    return ' '.join(spinArr)
