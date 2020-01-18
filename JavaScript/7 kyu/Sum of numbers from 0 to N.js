var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    // for
      //while
      if (count < 0) {
        return `${count}<0`
      } else if (count === 0) {
        return "0=0"
      } else {
         const arr = count > 0 && [...Array.from(Array(count).keys()), count];
        const sum = arr.length && arr.reduce((a, b) => a + b);
        return`${arr.join("+")} = ${sum}`
      }
  };

  return SequenceSum;

})();