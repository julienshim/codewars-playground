function calculateTip(amount, rating) {
  const percent = {
    "terrible": 0.00,
    "poor": 0.05,
    "good": 0.10,
    "great": 0.15,
    "excellent": 0.20
  }
  const key = rating.toLowerCase();
  const tip = Math.ceil(amount * percent[key]);
  return percent[key] !== undefined ? tip : 'Rating not recognised';
}
