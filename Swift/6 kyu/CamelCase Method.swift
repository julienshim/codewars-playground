func camelCase(_ str: String) -> String {
  return str.split(separator: " ").map{ $0.capitalized }.joined()
}