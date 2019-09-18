function declareWinner(fighter1, fighter2, firstAttacker) {
  const fighter1Stamina = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const fighter2Stamina = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  return fighter1Stamina < fighter2Stamina
    ? fighter2.name
    : fighter2Stamina < fighter1Stamina
    ? fighter1.name
    : firstAttacker;
}
