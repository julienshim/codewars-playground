function peopleWithAgeDrink(old) {
    let drink = 'whisky';
    switch(true) {
       case old < 14:
          drink = 'toddy';
          break;
       case old < 18:
          drink = 'coke'
          break;
       case old < 21:
          drink = 'beer';
          break;   
    }
    return `drink ${drink}`;
  };