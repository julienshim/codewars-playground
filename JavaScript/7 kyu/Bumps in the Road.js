function bump(x){
    return x.split("").filter(x => x === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';
  }