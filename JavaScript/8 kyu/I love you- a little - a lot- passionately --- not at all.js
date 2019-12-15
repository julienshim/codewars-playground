function howMuchILoveYou(nbPetals) {
    // your code
    const message = {
      5: 'madly',
      4: 'passionately',
      3: 'a lot',
      2: 'a little',
      1: 'I love you',
      0: 'not at all'
    }
    return message[nbPetals % 6];
}
