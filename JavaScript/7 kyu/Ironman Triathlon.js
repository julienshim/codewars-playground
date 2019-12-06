function iTri(s){
//its gonna be a long day!
  const swim = 2.4;
  const bicycle = 112;
  const marathon = 26.2;
  const race = swim + bicycle + marathon;
  
  switch(true) {
    case s <= 0:
      return 'Starting Line... Good Luck!';
      break;
    case s <= swim:
      return {'Swim': `${(race - s).toFixed(2)} to go!`};
      break;
    case s <= swim + bicycle:
      return {'Bike': `${(race - s).toFixed(2)} to go!`};
      break;
    case s >= race - 10 && s < race:
      return {'Run': 'Nearly there!'};
      break;
    case s < race:
      return {'Run': `${(race - s).toFixed(2)} to go!`};
      break;
    default:
      return 'You\'re done! Stop running!';
  }
}
