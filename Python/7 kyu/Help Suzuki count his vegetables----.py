def count_vegetables(string):
    vegetables = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"]
    list_of_tuples = [(string.split(' ').count(vegetable), vegetable) for vegetable in vegetables]
    
    return sorted(list_of_tuples, key=lambda x: (x[0], x[1]), reverse=True)