function presses(phrase) {
    // To do...
    const keypad = `------- ------- -------
                    |     | | ABC | | DEF |
                    |  1  | |  2  | |  3  |
                    ------- ------- -------
                    ------- ------- -------
                    | GHI | | JKL | | MNO |
                    |  4  | |  5  | |  6  |
                    ------- ------- -------
                    ------- ------- -------
                    |PQRS | | TUV | | WXYZ|
                    |  7  | |  8  | |  9  |
                    ------- ------- -------
                    ------- ------- -------
                    |     | |space| |     |
                    |  *  | |  0  | |  #  |
                    ------- ------- -------`
    
    const special = {
        ' ': 1,
        '1': 1,
        '0': 2,
        '7': 5,
        '9': 5,
    }
  
    const objectify = a => a.reduce((a, k, i) => ({ ...a, [k]: i+1}), {});
  
    const alpha = keypad.match(/[A-Z]{3,4}/g);
    const num = keypad.match(/[0-9]{1}/g);
  
    const alphaValues = alpha.reduce((a, c) => ({...a, ...objectify([...c])}), {});
    const numValues = num.reduce((a, c) => ({ ...a, [c]: special[c] || 4}), {});
  
    return [...phrase].reduce((a, c) => a + (special[c] || alphaValues[c.toUpperCase()] || numValues[c]), 0);
  }