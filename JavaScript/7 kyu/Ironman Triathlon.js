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

// 10/14/2021 - Seem to have already have done this. An alternative:

function iTri(s){
  //its gonna be a long day!
    const totalDistance = 2.4+112+26.2;
    const distanceRemaining = (totalDistance - s).toFixed(2);
    
    if (s === 0) { return 'Starting Line... Good Luck!' }
    if (distanceRemaining < 0) { return 'You\'re done! Stop running!' }
    if (distanceRemaining < 10) { return { Run: 'Nearly there!' } }
    
    if (s <= 2.4) { return { Swim: `${distanceRemaining} to go!` } }
    if (s > 2.4 && s <= 114.4) { return { Bike: `${distanceRemaining} to go!` } }
    if (s > 114.4) { return { Run: `${distanceRemaining} to go!` } }
  }
