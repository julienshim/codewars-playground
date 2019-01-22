function formatDuration(seconds) {

  let time = seconds;
  // Complete this function

  if (time >= 31557600) {
     return year(time);
  } else if (time >= 86400) { 
     return day(time);
  } else if (time >= 3600) {
     return hour(time);
  } else if (time >= 60) {
     return minute(time);
  } else {
    if (time === 0) {
      return 'now';
    }
    return second(time);
  }
  
}

function year(t) {

   let plural = Math.floor(t/31557600) === 1 ? "year" : "years";
   return t % 31557600 === 0 ? `${t/31557600} ${plural}` : `${Math.floor(t/31557600)} ${plural}, ${day(t%31557600)}`;

}

function day(t) {
   let plural = Math.floor(t/86400) === 1 ? "day" : "days";
   return t % 86400 === 0 ? `${t/86400} ${plural}` : `${Math.floor(t/86400)} ${plural}, ${hour(t%86400)}`;
}

function hour(t) {
   let plural = Math.floor(t/3600) === 1 ? "hour" : "hours";
   return t % 3600 === 0 ? `${t/3600} ${plural}` : `${Math.floor(t/3600)} ${plural}, ${minute(t%3600)}`;
}

function minute(t) {
    let plural = Math.floor(t/60) === 1 ? "minute" : "minutes";
      return t % 60 === 0 ? `${t/60} ${plural}` : `${Math.floor(t/60)} ${plural} and ${second(t%60)}`
}

function second(t) {
    let plural = t === 1 ? "second" : "seconds";
    return `${t} ${plural}`;
}
