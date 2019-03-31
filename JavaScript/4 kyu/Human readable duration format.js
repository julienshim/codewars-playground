function formatDuration(seconds) {
  // Complete this function
  if (seconds === 0) {
    return "now";
  } else if (seconds >= 31536000) {
    return year(seconds);
  } else if (seconds >= 86400) {
    return day(seconds);
  } else if (seconds >= 3600) {
    return hour(seconds);
  } else if (seconds >= 60) {
    return minute(seconds);
  } else {
    return second(seconds);
  }
}

function year(t) {
  let plural = Math.floor(t / 31557600) === 1 ? "year" : "years";
  let difference = t % 31536000;
  let command = difference % 86400 === 0 ? " and" : ",";
  return t % 31557600 === 0
    ? `${t / 31557600} ${plural}`
    : `${Math.floor(t / 31536000)} ${plural}${command} ${day(difference)}`;
}

function day(t) {
  let plural = Math.floor(t / 86400) === 1 ? "day" : "days";
  let difference = t % 86400;
  let command = difference % 3600 === 0 ? " and" : ",";
  return t % 86400 === 0
    ? `${t / 86400} ${plural}`
    : `${Math.floor(t / 86400)} ${plural}${command} ${hour(difference)}`;
}

function hour(t) {
  let plural = Math.floor(t / 3600) === 1 ? "hour" : "hours";
  let difference = t % 3600;
  let command = difference % 60 === 0 ? " and" : ",";
  return t % 3600 === 0
    ? `${t / 3600} ${plural}`
    : `${Math.floor(t / 3600)} ${plural}${command} ${minute(difference)}`;
}

function minute(t) {
  let plural = Math.floor(t / 60) === 1 ? "minute" : "minutes";
  let difference = t % 60;
  let command = difference % 1 === 0 ? " and" : ",";
  return t % 60 === 0
    ? `${t / 60} ${plural}`
    : `${Math.floor(t / 60)} ${plural}${command} ${second(difference)}`;
}

function second(t) {
  let plural = t === 1 ? "second" : "seconds";
  return `${t} ${plural}`;
}
