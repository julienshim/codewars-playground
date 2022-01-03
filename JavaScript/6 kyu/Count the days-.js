function countDays(d){
    //have fun with coding! :)
    const dm = d - Date.now();
    const dds = 1000*60*60*24;
    const dt = Math.round(dm / dds);
    if (dt < 0) return 'The day is in the past!';
    if (dt > 0) return `${dt} days`;
    return 'Today is the day!';
  }