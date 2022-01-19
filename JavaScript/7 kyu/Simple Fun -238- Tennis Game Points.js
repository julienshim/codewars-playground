function tennisGamePoints(score) {
    //coding and coding..
      const k = {
        'love': 0,
        '15': 1,
        '30': 2,
        '40': 3
      }
      const [a, b] = score.split('-');
      const t = (n , m) => k[n in k ? n : m];
      return t(a,b) + t(b,a);
    };