function preFizz(n) {
  return [... Array.from(Array(n).keys())].map(n => n += 1);
}
