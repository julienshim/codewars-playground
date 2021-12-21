function whichNote(keyPressCount) {
    // your code here
    const keyboard = `"A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", or "G#"`.match(/[A-Z#]{1,2}/g);
    const position = (keyPressCount-1) % 88 % 12;
    return keyboard[position];
}