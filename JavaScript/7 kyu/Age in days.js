function ageInDays(year, month, day){
    //Your Magnificent Code here
    // Note that month == 1 means January (in contrast to JavaScripts Date where the month is zero based)
    const d1 = new Date();
    const d2 = new Date(`${month}/${day}/${year}`);
    const delta_time = d1.getTime() - d2.getTime();
    const delta_days = Math.floor(delta_time / (1000 * 3600 * 24));
    return `You are ${delta_days} days old`;
  }