func triangular(_ n: Int) -> Int{
  return n <= 0 ? 0 : n + triangular(n-1)
}
