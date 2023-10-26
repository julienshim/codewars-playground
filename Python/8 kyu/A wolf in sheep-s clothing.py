def warn_the_sheep(queue):
    position = queue[::-1].index('wolf')
    return 'Pls go away and stop eating my sheep' if position == 0 else f'Oi! Sheep number { position }! You are about to be eaten by a wolf!'
