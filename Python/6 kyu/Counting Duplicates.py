def duplicate_count(text):
    # Your code goes here
    track = {}
    
    for letter in text.lower():
        if text.lower().count(letter) > 1 and letter not in track:
            track[letter] = True
  
    return len(track.keys())