func dontGiveMeFive(_ start: Int, _ end: Int) -> Int {
  var count = 0;
  for i in start...end {
    if (!"\(i)".contains("5")){
    count = count + 1
    }
  }
  return count
}
