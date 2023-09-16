//return price without vat
function excludingVatPrice(price) {
  // your code
  if (price === null) return -1;
  return Math.round((price / 1.15) * 100) / 100 || 0;
}
