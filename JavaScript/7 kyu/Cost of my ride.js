function insurance(age, size, numofdays){
    //code here
    const d = numofdays < 0 ? 0 : numofdays;
    const a = age < 25 ? d * 10 : 0;
    const b = d * 50;
    const k = {
      "economy": 0,
      "medium": 10,
      "full-size": 15
    }
    const s = d * (k[size] === undefined ? k["full-size"] : k[size]);
    return a + b + s;
  }