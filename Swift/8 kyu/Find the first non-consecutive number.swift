func firstNonConsecutive (_ arr: [Int]) -> Int? {
    var consec = arr[0]
    for num in arr {
      if num != consec {
        return num
      }
      consec += 1
    }
    return nil
}
