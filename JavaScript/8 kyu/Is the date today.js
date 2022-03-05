function isToday(date) {
    //Code goes here.
    const [a, b]  = [date, new Date()].map(d => d.toDateString())
    return a === b;
  }