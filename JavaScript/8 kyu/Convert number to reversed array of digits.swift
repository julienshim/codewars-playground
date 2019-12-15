func digitize(_ num:Int) -> [Int] {
  return String(num).characters.map { Int(String($0))! }.reversed()
}
