def subtract_sum(number):
    fruits = {
        1: "kiwi",
        2: "pear",
        3: "kiwi",
        4: "banana",
        5: "melon",
        6: "banana",
        7: "melon",
        8: "pineapple",
        9: "apple",
        10: "pineapple",
        11: "cucumber",
        12: "pineapple",
        13: "cucumber",
        14: "orange",
        15: "grape",
        16: "orange",
        17: "grape",
        18: "apple",
        19: "grape",
        20: "cherry",
        21: "pear",
        22: "cherry"
    }   

    new_n = number - sum(int(n) for n in str(number))
    return fruits[new_n] if new_n in fruits else subtract_sum(new_n) #fruit name like "apple"