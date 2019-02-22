func sumOfPositives (_ numbers: [Int] ) -> Int {
    // Your code here
    var sum = 0
    numbers.forEach { number in 
      if number > 0 { sum = sum + number }
    }
    return sum
}
