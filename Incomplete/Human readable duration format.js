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


// Test Cases Not Passing
/*
Expected: '4 years, 68 days, 3 hours and 4 minutes', instead got: '4 years, 67 days, 3 hours, 4 minutes'
Expected: '6 years, 192 days, 13 hours, 3 minutes and 54 seconds', instead got: '6 years, 191 days, 1 hour, 3 minutes and 54 seconds'
Expected: '8 years, 12 days, 13 hours, 41 minutes and 1 second', instead got: '8 years, 10 days, 13 hours, 41 minutes and 1 second'
Expected: '7 years, 246 days, 15 hours, 32 minutes and 54 seconds', instead got: '7 years, 244 days, 21 hours, 32 minutes and 54 seconds'
Expected: '3 years, 85 days, 1 hour, 9 minutes and 26 seconds', instead got: '3 years, 84 days, 7 hours, 9 minutes and 26 seconds'
Expected: '1 year, 19 days, 18 hours, 19 minutes and 46 seconds', instead got: '1 year, 19 days, 12 hours, 19 minutes and 46 seconds'
*/
