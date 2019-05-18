function movie(card, ticket, perc) {
    // your code
    let n = 0;
    let sysA = 0;
    let sysB = card;
    while(Math.ceil(sysB) >= sysA) {
      sysA += ticket;
      sysB += ticket * Math.pow(perc, n);
      n++;
    }
    return n-1;
};
