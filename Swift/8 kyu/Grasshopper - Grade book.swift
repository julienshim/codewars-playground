func getGrade(_ s1: Int, _ s2: Int, _ s3: Int) -> String {
  // Code here
    let score = [s1, s2, s3].reduce(0, +) / 3  
    if score < 60 {
      return "F"
    } 
    if score < 70 {
      return "D"
    } 
    if score < 80 {
      return "C"
    } 
    if score < 90 {
       return "B"
    }
    return "A"
}