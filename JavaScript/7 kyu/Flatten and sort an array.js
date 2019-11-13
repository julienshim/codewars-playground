function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return [].concat(...array).sort((a, b) => a - b);
}