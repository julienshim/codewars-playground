def get_drink_by_profession(param):
    # code me!
    try:
        return {
            "jabroni": "Patron Tequila",
            "school counselor": "Anything with Alcohol",
            "programmer": "Hipster Craft Beer",
            "bike gang member": "Moonshine",
            "politician": "Your tax dollars",
            "rapper": "Cristal"
        }[param.lower()]
    except KeyError:
        return "Beer"
