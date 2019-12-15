func wallpaper(_ l: Double, _  w: Double,_  h: Double) -> String {
    let numbers = ["zero", "one", "two", "three", "four", "five",
               "six", "seven", "eight", "nine", "ten",
               "eleven", "twelve", "thirteen", "fourteen", "fifteen",
               "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    // your code
    let area: Double = (2 * w * h) + (2 * l * h)
    let rolls: Int = Int(ceil(area/0.52/10.00 * 1.15))
    return l * w * h == 0 ? "zero" : numbers[rolls]
}
