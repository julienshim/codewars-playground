function fizzBuzzCuckooClock(time) {
  // your code here
  const timeArr = time.split(":");
  const hour = timeArr[0];
  const minute = timeArr[1];
  
  if (minute === "00") {
    let count = hour === "00" ? 12 : 
      parseInt(hour) > 12 ? parseInt(hour) - 12 :
      parseInt(hour);
    let cuckoo = [];
    while (cuckoo.length < count) { cuckoo.push("Cuckoo"); }
    return cuckoo.join(" ");
  } else {
    return parseInt(minute) % 30 === 0 ? "Cuckoo" : 
           parseInt(minute) % 15 === 0 ? "Fizz Buzz" :
           parseInt(minute) % 3 === 0 ? "Fizz" :
           parseInt(minute) % 5 === 0 ? "Buzz" :
           "tick";  
  }
}
