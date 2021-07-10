function correctness(bobsDecisions, expertDecisions) {
  return bobsDecisions.map((bD,i) => {
    const eD = expertDecisions[i];
    switch(true) {
      case bD === eD:
        return 1;
      case bD === '?' || eD === '?':
        return 0.5;
      default:
        return 0
    }
  }).reduce((a, b) => a + b, 0);
}
