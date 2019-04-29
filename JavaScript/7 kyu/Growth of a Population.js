function nbYear(p0, percent, aug, p) {
    // your code
    let n = 0
    let population = p0;
    while (population < p) {
      let growth = population + population * percent/100 + aug;
      population = growth;
      n++
    }
    return n;
}
