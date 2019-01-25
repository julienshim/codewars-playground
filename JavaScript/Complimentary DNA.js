function DNAStrand(dna){
  //your code here
  let split = dna.split("");
  let compliment = [];
  split.forEach(function(n){
    switch(n){
      case "A":
        compliment.push("T");
        break;
      case "C":
        compliment.push("G");
        break;
      case "T":
        compliment.push("A");
        break;
      default:
        compliment.push("C");
    };
  });
  return compliment.join("");
};
