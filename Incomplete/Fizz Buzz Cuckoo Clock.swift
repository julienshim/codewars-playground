func fizzBuzzCuckooClock(_ time: String) -> String {
  // Do something
  var timeArr = time.split(separator: ":")
  let hour = timeArr[0]
  let minute = timeArr[1]
  print(hour, minute)
  func cuckoo (count: Int) -> String {
    var bird: Array = [String]()
    while (bird.count < count) { 
      bird.append("Cuckoo") 
    }
    return bird.joined(separator: " ");
  }
  
  if (minute == "00") {
    if (hour == "00" ) {
      return cuckoo(count: 12)
    } else if (Int(hour)! <= 12) {
      return cuckoo(count: Int(hour)!)
    } else {
      return cuckoo(count: Int(hour)! - 12)
    }
  } else {
    return "Undefinied"
  }
  
}  

// https://www.codewars.com/kata/fizz-buzz-cuckoo-clock/train/swift
// Server errors
