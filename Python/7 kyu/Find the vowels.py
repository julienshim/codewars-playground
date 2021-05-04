import re

def vowel_indices(word):
	# your code here
    return [m.start() + 1  for m in re.compile('[aeiouy]').finditer(word.lower())]