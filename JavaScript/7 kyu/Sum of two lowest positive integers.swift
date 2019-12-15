func sumOfTwoSmallestIntegersIn(_ array: [Int]) -> Int {
   let positive = array.filter({ $0 >= 0 }).sorted() 
   return positive[0] + positive[1]
}
