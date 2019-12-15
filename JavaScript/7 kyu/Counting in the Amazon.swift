func countArare(_ n: Int) -> String {
  return n <= 0 ? "" :
    n == 1 ? "anane" :
    n == 2 ? "adak" :
    "adak " + countArare(n-2)
}
