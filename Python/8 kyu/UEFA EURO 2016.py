def uefa_euro_2016(teams, scores):
    matchup = ' - '.join(teams)
    
    def result():
        if scores[0] == scores[1]:
            return 'teams played draw.'
        return teams[scores.index(max(scores))] + ' won!'
            
    return f'At match {matchup}, {result()}'