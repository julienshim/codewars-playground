function howManydays(month){
    var days;
    switch (true){
      case [2].includes(month):
        days = 28;
        break;
      case [4, 6, 9, 11].includes(month):
        days = 30;
        break;
      default:
        days = 31;
    }
    return days;
  }