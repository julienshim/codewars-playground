function applesDistribution(apples, boxCapacity, maxResidue) {
    let result  = 0;
    for (let i = 1; i <= boxCapacity; i++) {
      if (apples % i <= maxResidue) {
        result += 1
      }
    }
    return result;
  }