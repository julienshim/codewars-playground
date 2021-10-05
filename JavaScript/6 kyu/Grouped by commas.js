function groupByCommas(n) {
    const stringN = String(n);
    let commafied = '';
    for (let i = 0; i < stringN.length; i += 1) {
      const final = stringN.length - 1
      commafied += stringN[i]
      if (i !== final && (final - i) % 3 === 0) {
        commafied += ','
      }
    }
    return commafied;
  }