def DNA_strand(dna):
    # code here
    pairs = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    return ''.join(pairs[l] for l in dna)