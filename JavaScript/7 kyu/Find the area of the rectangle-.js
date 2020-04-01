function area(d, l){
    // Write your own Code!
    const h = (d**2 - l**2) ** 0.5
    const a = l * h
    return h + l > d ? Math.round(a * 100) / 100: 'Not a rectangle'
}
