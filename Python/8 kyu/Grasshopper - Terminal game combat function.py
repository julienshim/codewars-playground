def combat(health, damage):
    #your code here
    newHealth = health - damage
    return newHealth if newHealth > 0 else 0