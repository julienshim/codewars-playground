function minutesToMidnight(d){
    //have fun with coding^.^
    const hm = (23 - d.getHours()) * 60;
    const mm = 60 - d.getMinutes();
    const s = d.getSeconds() > 30 ? -1 : 0;
    const mtm = hm + mm + s;
    return `${mtm} minute${mtm > 1 ? 's' : ''}`;
  }