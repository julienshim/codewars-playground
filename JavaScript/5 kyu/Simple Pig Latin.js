function pigIt(str){
    //Code here
    return str.split(" ").map(word => {
      if (word.includes("!")) {
        return "!"
      }
      if (word.includes("?")) {
        return "?"
      }
      return word.slice(1) + word[0] + "ay"
      }).join(" ")
  }