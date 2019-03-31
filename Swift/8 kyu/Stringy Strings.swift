func stringy(_ size: Int) -> String {
  var string: String = "";
  for i in 0..<size {
    let append = i % 2 == 0 ? "1" : "0"
    string = string + append
  }
  return string
}
