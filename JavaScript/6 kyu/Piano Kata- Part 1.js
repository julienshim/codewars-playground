function blackOrWhiteKey(keyPressCount) {
    // your code here
    const blackKeys = [1, 4, 6, 9, 11].reduce((a, c) => ({...a, [c]: 'black'}),{})
    const position = (keyPressCount - 1) % 88 % 12;
    return blackKeys[position] || 'white';
}