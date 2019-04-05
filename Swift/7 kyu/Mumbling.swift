func accum(_ s: String) -> String {
  let letterArray = Array(s.lowercased().characters)
  var mumble = ""
  for i in 0..<letterArray.count {
    for j in 0...i {
        mumble += j == 0 
          ? String(letterArray[i]).uppercased() 
          : String(letterArray[i])
    }
    if i < letterArray.count-1 { mumble += "-" }
  }
  return mumble
}
