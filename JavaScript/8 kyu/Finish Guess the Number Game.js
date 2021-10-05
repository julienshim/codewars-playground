class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if (this.lives < 1) {
        throw new Error('Already dead. No more lives.')
      }
      if (n === this.number) {
        return true
      } 
      this.lives -= 1
      return false
    }
  }