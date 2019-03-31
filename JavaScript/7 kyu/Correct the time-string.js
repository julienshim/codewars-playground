function timeCorrect(timestring) {
  if (!timestring) {
    return timestring;
  } else if (/[a-z]/.test(timestring) || !timestring.includes(":")) {
    return null;
  } else {
    let array = timestring.split(":");
    let hour = parseInt(array[0]);
    let minute = parseInt(array[1]);
    let second = parseInt(array[2]);
    if (hour < 24 && minute < 60 && second < 60) {
      return timestring;
    } else {
      while (second >= 60) {
        second = second % 60;
        minute += 1;
      }
      while (minute >= 60) {
        minute = minute % 60;
        hour += 1;
      }
      while (hour >= 24) {
        hour = hour % 24;
      }
      return `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}`;
    }
    function formatTime(time){
      return time.toString().length < 2 ? ("0" + time).substring(-2) : time
    }
  }
}
