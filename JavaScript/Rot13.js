function rot13(message){
    const key = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let secret = '';
    for (let i = 0; i < message.length; i++) {
      let currentLetter = key.indexOf(message[i]);
        if (currentLetter === - 1) {
        secret += message[i];
      } else if (currentLetter < 13) {
        secret += key.charAt(currentLetter + 13);
      } else if (currentLetter < 26) {
        secret += key.charAt(currentLetter - 13);
      } else if (currentLetter < 39) {
        secret += key.charAt(currentLetter + 13);
      } else if (currentLetter < 52) {
        secret += key.charAt(currentLetter - 13);
      }
    }
    return secret;
  } 