function pointsPer48(ppg, mpg) {
  const pp48mpg = 48 * ppg / mpg;
  return Math.round(pp48mpg * 10)/10 || 0
}
