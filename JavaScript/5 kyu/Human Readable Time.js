function humanReadable(seconds) {
    // TODO
      const hours = parseInt( seconds / 3600 ) ;
      const minutes = parseInt( seconds / 60 ) % 60;
      seconds = seconds % 60;
    
      const format = (num) => {
        return num < 10 ? `0${num}` : num;
      }
      
      return [format(hours), format(minutes), format(seconds)].join(":")
  }