const findSquares = num => {
    const k = Math.floor((num - 1) / 2)
    const min = k ** 2;
    const max = min + num
    return `${max}-${min}`;
};
