// complete the function
function solution(string) {
    let nString = ''
    for (let i = 0; i < string.length; i += 1) {
      if (string[i].toLowerCase() === string[i]) {
        nString += string[i]
      } else {
        nString += ` ${string[i]}`
      }
    }
    return nString
}
