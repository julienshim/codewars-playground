function toTime(seconds) {
  //code here
    const hours = Math.floor(seconds/60/60);
    const minutes = Math.floor(seconds/60) % 60;
    return `${hours} hour(s) and ${minutes} minute(s)`;
  }