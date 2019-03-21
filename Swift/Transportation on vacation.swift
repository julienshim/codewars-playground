func RentalCarCost(_ days: Int) -> Int {
  let amount = days * 40
  if (days >= 7) {
    return amount - 50 
  } else if (days >= 3) {
    return amount - 20
  }
  return amount
}
