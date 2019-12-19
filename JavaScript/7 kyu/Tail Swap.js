function tailSwap(arr) {
    const brokenArr = arr.map(x => x.split(":"));
    const a = [brokenArr[0][0], brokenArr[1][1]];
    const b = [brokenArr[1][0], brokenArr[0][1]];
    return [a, b].map(x => x.join(":"));
}