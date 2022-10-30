export class Kata {
    static dnaStrand(dna: string) {
      //your code here
        const pairs: {[key: string]: string} = {
          A: "T",
          T: "A",
          C: "G",
          G: "C"
        }
        return dna.split('').map(l => pairs[l]).join('');
    }
  }