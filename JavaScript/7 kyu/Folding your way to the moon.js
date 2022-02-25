function foldTo(distance) {
    if (distance >= 0.0001) {
      return Math.ceil(Math.log2(distance * 10000));
    }
    return distance >= 0 ? 0 : null;
  }