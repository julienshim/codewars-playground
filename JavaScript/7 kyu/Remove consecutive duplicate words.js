const removeConsecutiveDuplicates = s => { // your perfect code...
    return s.split(' ').filter((x, i, a) => x !== a[i-1]).join(' ');
}