function remove (string) {
    //coding and coding....
    const hasTwoExclamations = (s) => {
      const exclamationMatches = s.match(/!/g);
      return !exclamationMatches || exclamationMatches.length !== 1;
    };
    return string.split(' ').filter(hasTwoExclamations).join(' ');
  }